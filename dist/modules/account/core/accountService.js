"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeable_1 = require("fp-ts/lib/pipeable");
const mongooseUtils_1 = require("../../common/mongooseUtils");
const TE = require("fp-ts/lib/TaskEither");
const E = require("fp-ts/lib/Either");
const O = require("fp-ts/lib/Option");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const resultHandlers_1 = require("../../common/resultHandlers");
const withs_1 = require("../../common/withs");
const account_1 = require("../../../database/account");
const accountCommonTypes_1 = require("../types/accountCommonTypes");
const logger_1 = require("../../common/logger");
const function_1 = require("fp-ts/lib/function");
const HttpStatus = require("http-status-codes");
const Array_1 = require("fp-ts/lib/Array");
const fpUtils_1 = require("../../common/fpUtils");
const Apply_1 = require("../../../../node_modules/fp-ts/lib/Apply");
const Do_1 = require("../../../../node_modules/fp-ts-contrib/lib/Do");
const lib_1 = require("../../../../lib");
const log = logger_1.logger(logger_1.factory.getLogger('accountService'));
exports.accountService = () => ({
    register: (request) => {
        log.info(`register: request ${request}`)();
        return pipeable_1.pipe(request.body, accountCommonTypes_1.registerAccountRequest.decode, E.mapLeft(resultHandlers_1.fromIOErrors), TE.fromEither, TE.chain(checkAccountExists), TE.map(preparePlainAccountDocument), TE.chain(createAccountDocument));
    },
    deactivate: (input) => {
        log.info(`deactivate: request ${JSON.stringify(input)}`)();
        return pipeable_1.pipe(input.accountIds, mongooseUtils_1.findManyDocumentsByIds(account_1.accountModel), TE.chain((accountDocuments) => Array_1.array.traverse(TE.taskEither)(accountDocuments, exports.activateOrDeactivateAccount(lib_1.SystemStatusEnum.INACTIVE))));
    },
    deactivateDoNotation: (input) => {
        log.info(`deactivate: request ${JSON.stringify(input)}`)();
        return Do_1.Do(TE.taskEither)
            .bind('accounts', mongooseUtils_1.findManyDocumentsByIds(account_1.accountModel)(input.accountIds))
            .bindL('deactivated', (ctx) => Array_1.array.traverse(TE.taskEither)(ctx.accounts, exports.activateOrDeactivateAccount(lib_1.SystemStatusEnum.INACTIVE)))
            .return((ctx) => ({
            beforeDeactivate: ctx.accounts,
            afterDeactivate: ctx.deactivated,
        }));
    },
    activate: (input) => {
        log.info(`activate: request ${JSON.stringify(input)}`)();
        return pipeable_1.pipe(input.accountIds, mongooseUtils_1.findManyDocumentsByIds(account_1.accountModel), TE.chain((accountDocuments) => Apply_1.sequenceT(TE.taskEither)(Array_1.array.traverse(TE.taskEither)(accountDocuments, exports.activateOrDeactivateAccount(lib_1.SystemStatusEnum.ACTIVE)), Array_1.array.traverse(TE.taskEither)(accountDocuments, exports.activateOrDeactivateAccount(lib_1.SystemStatusEnum.ACTIVE)))), TE.map(([docsIteration1, docsIterarion2]) => docsIteration1));
    },
    login: (request) => {
        log.info(`login: request ${request}`)();
        return pipeable_1.pipe(request.body, accountCommonTypes_1.loginRequest.decode, E.mapLeft(resultHandlers_1.fromIOErrors), TE.fromEither, TE.chain(exports.authenticate));
    },
    sendSystemMessage: (input) => {
        log.info(`sendSystemMessage: input ${JSON.stringify(input)}`)();
        return pipeable_1.pipe(input.accountIds, mongooseUtils_1.findManyDocumentsByIds(account_1.accountModel), TE.map((accountDocuments) => Array_1.array.map(accountDocuments, exports.setAccountSystemMessage(input.systemMessage))), TE.chain((results) => Array_1.array.sequence(fpUtils_1.taskEitherLeftConcat(fpUtils_1.getSemigroupArray()))(results)));
    },
});
exports.setAccountSystemMessage = (message) => (account) => {
    log.info(`setAccountSystemMessage, message: ${message} to ${JSON.stringify(account._id)}`)();
    return pipeable_1.pipe(account, (account) => {
        account.systemMessages.push(message);
        return account;
    }, () => TE.left(resultHandlers_1.toPortalErrors(['eee'])));
};
exports.activateOrDeactivateAccount = (status) => (account) => {
    log.info(`activateOrDeactivateAccount, account: ${JSON.stringify(account)}`)();
    return pipeable_1.pipe(account, (account) => {
        account.systemStatus = status;
        return account;
    }, mongooseUtils_1.saveDocument);
};
exports.generateSalt = () => {
    return crypto.randomBytes(16).toString('base64');
};
exports.generateHashedCredentials = (password) => {
    const salt = exports.generateSalt();
    const prePasswordHash = crypto.createHmac('sha512', salt);
    prePasswordHash.update(password);
    const hashedPassword = prePasswordHash.digest('hex');
    return { salt, hashedPassword };
};
exports.recomputePasswordHash = (salt) => (password) => {
    const prePasswordHash = crypto.createHmac('sha512', salt);
    prePasswordHash.update(password);
    const hashedPassword = prePasswordHash.digest('hex');
    return hashedPassword;
};
const eqHashed = (salt) => ({
    equals: (passwordHashed, passwordInput) => passwordHashed === exports.recomputePasswordHash(salt)(passwordInput),
});
exports.verify = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.match('Bearer .*')) {
        res.status(HttpStatus.FORBIDDEN).send({ err: 'No token found.' });
        return;
    }
    try {
        const token = auth.split('Bearer ')[1];
        jwt.verify(token, 'temporary');
    }
    catch (e) {
        res.status(HttpStatus.FORBIDDEN).send({ err: 'Verify token error.' });
    }
    next();
};
exports.authenticate = (request) => {
    log.info(`authenticate: request ${request}`)();
    return pipeable_1.pipe(request.email, findAccountByEmail, TE.chain(function_1.flow(O.fromNullable, O.mapNullable((account) => account), TE.fromOption(() => resultHandlers_1.portalError('account not exists')))), TE.chain((account) => eqHashed(account.salt).equals(account.password, request.password)
        ? TE.right(exports.generateAuthenticationPayload(account._id))
        : TE.left(resultHandlers_1.portalError('password is not valid'))));
};
exports.generateAuthenticationPayload = (accountId) => {
    return {
        accountId,
        token: generateToken({ accountId }, 'temporary', 60000),
    };
};
const generateToken = (ctx, secretKey, expiresIn) => {
    return {
        token: jwt.sign(ctx, secretKey, { expiresIn }),
        expiresIn,
    };
};
const checkAccountExists = (request) => () => findAccountByEmail(request.email)().then(function_1.flow(E.chain(function_1.flow(O.fromNullable, E.fromOption(() => resultHandlers_1.toPortalErrors([`Account not found.`])))), E.chain((res) => (res ? E.left(resultHandlers_1.toPortalErrors([`Account registred with email ${request.email} allready exists.`])) : E.right(request)))));
const findAccountByEmail = (email) => pipeable_1.pipe(email, mongooseUtils_1.findDocumentByKey(account_1.accountModel, 'email'));
const createAccountDocument = (plainAccountDocument) => pipeable_1.pipe(plainAccountDocument, mongooseUtils_1.createDocument(account_1.accountModel));
const preparePlainAccountDocument = (registerAccountRequest) => pipeable_1.pipe({
    name: 'Ondrej',
    surname: 'Basista',
    email: registerAccountRequest.email,
    error: false,
    password: null,
    passwordRetry: null,
    salt: null,
    systemStatus: lib_1.SystemStatusEnum.WAITING,
    publicPolicy: lib_1.PublicPolicyEnum.CLOSED,
    accessLevel: lib_1.AccessLevelEnum.USER,
    createdAt: null,
    lastUpdate: null,
}, updateAccountCredentials(exports.generateHashedCredentials(registerAccountRequest.password)), withs_1.withCreatedAndUpdated);
const updateAccountCredentials = ({ salt, hashedPassword }) => (plainAccountDocument) => {
    return {
        ...plainAccountDocument,
        password: hashedPassword,
        passwordRetry: hashedPassword,
        salt,
    };
};
const absurd = (_) => { throw new Error('The impossible happened'); };
const prettyPrint = (adt) => {
    switch (adt.tag) {
        case 'foo': return `Foo(${adt.foo}: number)`;
        case 'bar': return `Bar(${adt.bar}: string)`;
        case 'baz': return `Baz(${adt.baz}: boolean)`;
        default: return absurd(adt);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hY2NvdW50L2NvcmUvYWNjb3VudFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBd0M7QUFDeEMsOERBQW1IO0FBQ25ILDJDQUEyQztBQUUzQyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFFcEMsZ0VBQXNGO0FBQ3RGLDhDQUF5RDtBQUN6RCx1REFBOEY7QUFFOUYsb0VBVXFDO0FBQ3JDLGdEQUFvRDtBQUNwRCxpREFBc0Q7QUFFdEQsZ0RBQWdEO0FBQ2hELDJDQUFzQztBQUV0QyxrREFBNkU7QUFDN0Usb0VBQW1FO0FBQ25FLHNFQUFpRTtBQUNqRSx5Q0FNeUI7QUFDekIsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLGdCQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQW1CM0MsUUFBQSxjQUFjLEdBQW1CLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakQsUUFBUSxFQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQyxPQUFPLGVBQUksQ0FDUCxPQUFPLENBQUMsSUFBSSxFQUNaLDJDQUFzQixDQUFDLE1BQU0sRUFDN0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBWSxDQUFDLEVBQ3ZCLEVBQUUsQ0FBQyxVQUFVLEVBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLEVBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FDbEMsQ0FBQztJQUNOLENBQUM7SUFDRCxVQUFVLEVBQUUsQ0FBQyxLQUE4QixFQUFFLEVBQUU7UUFDM0Ms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