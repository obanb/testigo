"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = exports.prepareAccountDocument = exports.insertAccountToCol = exports.findAccountByKey = exports.checkAccountExists = exports.getAccountCol = exports.loginAccountInput = exports.createAccountInput = exports.accountPlain = exports.accountRaw = exports.AccountTypeEnum = exports.loginPassword = exports.accountEmail = exports.accountSurname = exports.accountName = exports.accountId = void 0;
const t = require("io-ts");
const mongodb_1 = require("mongodb");
const pipeable_1 = require("fp-ts/pipeable");
const Eq_1 = require("fp-ts/Eq");
const TE = require("fp-ts/TaskEither");
const errors_1 = require("../errors");
const Server_1 = require("../../server/Server");
const E = require("fp-ts/Either");
const mongoInternal_1 = require("../mongoInternal");
const mongo_1 = require("../mongo");
const A = require("fp-ts/Array");
/**
 * Account models
 */
exports.accountId = new t.Type('accountId', (input) => mongodb_1.ObjectID.isValid(input), (input, context) => (mongodb_1.ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)), t.identity);
exports.accountName = t.brand(t.string, (n) => n.length > 3 && n.length < 30, 'accountName');
exports.accountSurname = t.brand(t.string, (n) => n.length > 2 && n.length < 30, 'accountSurname');
exports.accountEmail = t.brand(t.string, (n) => n.length > 2 && n.length < 30, 'accountEmail');
exports.loginPassword = t.brand(t.string, (n) => n.length > 6 && n.length < 30, 'loginPassword');
var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum["user"] = "USER";
    AccountTypeEnum["admin"] = "ADMIN";
})(AccountTypeEnum = exports.AccountTypeEnum || (exports.AccountTypeEnum = {}));
exports.accountRaw = t.interface({
    _id: exports.accountId,
    name: exports.accountName,
    surname: exports.accountSurname,
    email: exports.accountEmail,
    password: t.string,
    salt: t.string,
    aktivni: t.boolean,
    type: t.union([t.literal('user'), t.literal('admin')]),
});
exports.accountPlain = t.interface({
    name: exports.accountName,
    surname: exports.accountSurname,
    email: exports.accountEmail,
    password: t.string,
    salt: t.string,
    aktivni: t.boolean,
    type: t.union([t.literal('user'), t.literal('admin')]),
});
exports.createAccountInput = t.interface({
    name: exports.accountName,
    surname: exports.accountSurname,
    password: exports.loginPassword,
    email: exports.accountEmail,
});
exports.loginAccountInput = t.interface({
    email: exports.accountEmail,
    password: exports.loginPassword,
});
const registerAccount = (input) => pipeable_1.pipe(input, exports.checkAccountExists);
const getAccountCol = () => pipeable_1.pipe(Server_1.internalMongoClient, E.chain(mongoInternal_1.getInternalDatabase()), TE.fromEither, TE.chain(mongo_1.getCollection('accounts')));
exports.getAccountCol = getAccountCol;
const checkAccountExists = (input) => pipeable_1.pipe(exports.getAccountCol(), TE.chain((col) => exports.findAccountByKey('email', col)(input.email)), TE.map((acc) => (acc ? accountEq.emailType.equals(acc, input) : false)), TE.chain((notFound) => (notFound ? TE.left(errors_1.createBackendError(`Account already exists.`, errors_1.ErrorTag.database)({})) : TE.right(input))), TE.chain(exports.createAccount));
exports.checkAccountExists = checkAccountExists;
const findAccountByKey = (key, col) => (keyValue) => TE.tryCatch(() => col.findOne({ [key]: keyValue }), errors_1.createBackendError(`FindAccountByKey with ${key} key`, errors_1.ErrorTag.database));
exports.findAccountByKey = findAccountByKey;
const eqAccountEmailType = Eq_1.getStructEq({
    email: Eq_1.eqString,
    type: Eq_1.eqString,
});
const eqAccountNameSurname = Eq_1.getStructEq({
    name: Eq_1.eqString,
    surname: Eq_1.eqString,
});
const accountEq = {
    emailType: eqAccountEmailType,
    nameSurname: eqAccountNameSurname,
};
const insertAccountToCol = (input) => (col) => pipeable_1.pipe(TE.tryCatch(() => col.insertOne(input), // for Mongo insert WithId satisfaction, but id is automatically created by Mongo inself
errors_1.createBackendError(`Error while inserting ${JSON.stringify(input)} collection ${col.collectionName}`, errors_1.ErrorTag.database)));
exports.insertAccountToCol = insertAccountToCol;
const prepareAccountDocument = (input) => ({
    email: input.email,
    name: input.name,
    surname: input.surname,
    password: input.password,
    aktivni: true,
    salt: 'xxxx',
    type: 'user',
});
exports.prepareAccountDocument = prepareAccountDocument;
const createAccount = (input) => pipeable_1.pipe(exports.getAccountCol(), TE.chain(exports.insertAccountToCol(exports.prepareAccountDocument(input))), TE.chain((res) => pipeable_1.pipe(res.ops, A.lookup(0), E.fromOption(() => errors_1.createBackendError('Empty response ops', errors_1.ErrorTag.database)({})), E.chainW(exports.accountRaw.decode), E.mapLeft(errors_1.createBackendError('Response format error', errors_1.ErrorTag.database)), TE.fromEither)));
exports.createAccount = createAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYWNjb3VudC9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQTJCO0FBQzNCLHFDQUE2QztBQUU3Qyw2Q0FBb0M7QUFDcEMsaUNBQW1EO0FBQ25ELHVDQUF1QztBQUN2QyxzQ0FBcUU7QUFDckUsZ0RBQXdEO0FBQ3hELGtDQUFrQztBQUNsQyxvREFBcUQ7QUFDckQsb0NBQXVDO0FBQ3ZDLGlDQUFpQztBQUVqQzs7R0FFRztBQUVVLFFBQUEsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDL0IsV0FBVyxFQUNYLENBQUMsS0FBVSxFQUFzQixFQUFFLENBQUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQzNELENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFDNUYsQ0FBQyxDQUFDLFFBQVEsQ0FDYixDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDOUIsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUNJLENBQUMsRUFNSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQ2xDLGFBQWEsQ0FDaEIsQ0FBQztBQUdXLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQ2pDLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FDSSxDQUFDLEVBTUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUNsQyxnQkFBZ0IsQ0FDbkIsQ0FBQztBQUdXLFFBQUEsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQy9CLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FDSSxDQUFDLEVBTUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUNsQyxjQUFjLENBQ2pCLENBQUM7QUFHVyxRQUFBLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUNoQyxDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1ILEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFDbEMsZUFBZSxDQUNsQixDQUFDO0FBR0YsSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3ZCLGdDQUFhLENBQUE7SUFDYixrQ0FBZSxDQUFBO0FBQ25CLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQUlZLFFBQUEsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEMsR0FBRyxFQUFFLGlCQUFTO0lBQ2QsSUFBSSxFQUFFLG1CQUFXO0lBQ2pCLE9BQU8sRUFBRSxzQkFBYztJQUN2QixLQUFLLEVBQUUsb0JBQVk7SUFDbkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTTtJQUNkLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztJQUNsQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ3pELENBQUMsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEMsSUFBSSxFQUFFLG1CQUFXO0lBQ2pCLE9BQU8sRUFBRSxzQkFBYztJQUN2QixLQUFLLEVBQUUsb0JBQVk7SUFDbkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTTtJQUNkLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztJQUNsQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ3pELENBQUMsQ0FBQztBQU1VLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxQyxJQUFJLEVBQUUsbUJBQVc7SUFDakIsT0FBTyxFQUFFLHNCQUFjO0lBQ3ZCLFFBQVEsRUFBRSxxQkFBYTtJQUN2QixLQUFLLEVBQUUsb0JBQVk7Q0FDdEIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pDLEtBQUssRUFBRSxvQkFBWTtJQUNuQixRQUFRLEVBQUUscUJBQWE7Q0FDMUIsQ0FBQyxDQUFDO0FBSUgsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxlQUFJLENBQUMsS0FBSyxFQUFFLDBCQUFrQixDQUFDLENBQUM7QUFFaEYsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFLENBQUMsZUFBSSxDQUFDLDRCQUFtQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsbUNBQW1CLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBYSxDQUFhLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFoSixRQUFBLGFBQWEsaUJBQW1JO0FBRXRKLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FDNUQsZUFBSSxDQUNBLHFCQUFhLEVBQUUsRUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyx3QkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzlELEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUcsS0FBK0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUNsRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBa0IsQ0FBQyx5QkFBeUIsRUFBRSxpQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNwSSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFhLENBQUMsQ0FDMUIsQ0FBQztBQVBPLFFBQUEsa0JBQWtCLHNCQU96QjtBQUVDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBNkIsR0FBTSxFQUFFLEdBQTJCLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFLENBQzdILEVBQUUsQ0FBQyxRQUFRLENBQTJCLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLEVBQUUsMkJBQWtCLENBQUMseUJBQXlCLEdBQUcsTUFBTSxFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUQ5SSxRQUFBLGdCQUFnQixvQkFDOEg7QUFFM0osTUFBTSxrQkFBa0IsR0FBbUIsZ0JBQVcsQ0FBQztJQUNuRCxLQUFLLEVBQUUsYUFBUTtJQUNmLElBQUksRUFBRSxhQUFRO0NBQ2pCLENBQUMsQ0FBQztBQUVILE1BQU0sb0JBQW9CLEdBQW1CLGdCQUFXLENBQUM7SUFDckQsSUFBSSxFQUFFLGFBQVE7SUFDZCxPQUFPLEVBQUUsYUFBUTtDQUNwQixDQUFDLENBQUM7QUFFSCxNQUFNLFNBQVMsR0FBRztJQUNkLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0IsV0FBVyxFQUFFLG9CQUFvQjtDQUNwQyxDQUFDO0FBRUssTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBMkIsRUFBRSxFQUFFLENBQ3ZGLGVBQUksQ0FDQSxFQUFFLENBQUMsUUFBUSxDQUNQLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBbUIsQ0FBQyxFQUFFLHdGQUF3RjtBQUNsSSwyQkFBa0IsQ0FBQyx5QkFBeUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDM0gsQ0FDSixDQUFDO0FBTk8sUUFBQSxrQkFBa0Isc0JBTXpCO0FBRUMsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEtBQXlCLEVBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztJQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7SUFDaEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO0lBQ3RCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtJQUN4QixPQUFPLEVBQUUsSUFBSTtJQUNiLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07Q0FDZixDQUFDLENBQUM7QUFSVSxRQUFBLHNCQUFzQiwwQkFRaEM7QUFFSSxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQXlCLEVBQTJDLEVBQUUsQ0FDaEcsZUFBSSxDQUNBLHFCQUFhLEVBQUUsRUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUFrQixDQUFDLDhCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDM0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2IsZUFBSSxDQUNBLEdBQUcsQ0FBQyxHQUFHLEVBQ1AsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDWCxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUFrQixDQUFDLG9CQUFvQixFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUMzQixDQUFDLENBQUMsT0FBTyxDQUFDLDJCQUFrQixDQUFDLHVCQUF1QixFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDekUsRUFBRSxDQUFDLFVBQVUsQ0FDaEIsQ0FDSixDQUNKLENBQUM7QUFkTyxRQUFBLGFBQWEsaUJBY3BCIn0=