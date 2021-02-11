"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeable_1 = require("fp-ts/lib/pipeable");
const mongooseUtils_1 = require("../../common/mongooseUtils");
const TE = require("fp-ts/lib/TaskEither");
const E = require("fp-ts/lib/Either");
const resultHandlers_1 = require("../../common/resultHandlers");
const withs_1 = require("../../common/withs");
const lib_1 = require("../../../../lib");
const group_1 = require("../../../database/group");
const groupValidations_1 = require("./groupValidations");
exports.groupService = () => ({
    create: (input) => pipeable_1.pipe(input, groupValidations_1.validateCreateGroupInput, E.mapLeft(resultHandlers_1.toPortalErrors), E.map(preparePlainGroupDocument), TE.fromEither, TE.chain(createGroupDocument)),
});
const createGroupDocument = (plainGroupDocument) => pipeable_1.pipe(plainGroupDocument, mongooseUtils_1.createDocument(group_1.groupModel));
const preparePlainGroupDocument = (input) => pipeable_1.pipe({
    name: 'OndraGroup',
    error: false,
    groupType: lib_1.GroupTypeEnum.PREMIUM,
    systemStatus: lib_1.SystemStatusEnum.WAITING,
    publicPolicy: lib_1.PublicPolicyEnum.OPENED,
    accessLevel: lib_1.AccessLevelEnum.USER,
    createdAt: null,
    lastUpdate: null,
    groupAlliances: []
}, withs_1.withCreatedAndUpdated);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZ3JvdXAvY29yZS9ncm91cFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBd0M7QUFDeEMsOERBQTBEO0FBQzFELDJDQUEyQztBQUMzQyxzQ0FBc0M7QUFFdEMsZ0VBQTJEO0FBQzNELDhDQUF5RDtBQUN6RCx5Q0FNeUI7QUFDekIsbURBQXVFO0FBQ3ZFLHlEQUE0RDtBQUcvQyxRQUFBLFlBQVksR0FBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3QyxNQUFNLEVBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FDaEMsZUFBSSxDQUNBLEtBQUssRUFDTCwyQ0FBd0IsRUFDeEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQywrQkFBYyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsRUFDaEMsRUFBRSxDQUFDLFVBQVUsRUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQ2hDO0NBQ1IsQ0FBQyxDQUFDO0FBRUgsTUFBTSxtQkFBbUIsR0FBd0IsQ0FBQyxrQkFBc0MsRUFBRSxFQUFFLENBQ3hGLGVBQUksQ0FDQSxrQkFBa0IsRUFDbEIsOEJBQWMsQ0FBQyxrQkFBVSxDQUFDLENBQzdCLENBQUM7QUFFTixNQUFNLHlCQUF5QixHQUE4QixDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUNyRixlQUFJLENBQ0E7SUFDSSxJQUFJLEVBQUUsWUFBWTtJQUNsQixLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxtQkFBYSxDQUFDLE9BQU87SUFDaEMsWUFBWSxFQUFFLHNCQUFnQixDQUFDLE9BQU87SUFDdEMsWUFBWSxFQUFFLHNCQUFnQixDQUFDLE1BQU07SUFDckMsV0FBVyxFQUFFLHFCQUFlLENBQUMsSUFBSTtJQUNqQyxTQUFTLEVBQUcsSUFBSTtJQUNoQixVQUFVLEVBQUUsSUFBSTtJQUNoQixjQUFjLEVBQUUsRUFBRTtDQUNyQixFQUNELDZCQUFxQixDQUN4QixDQUFDIn0=