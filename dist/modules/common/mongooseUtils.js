"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resultHandlers_1 = require("./resultHandlers");
const TE = require("fp-ts/lib/TaskEither");
exports.createDocument = (model) => (plainData) => TE.tryCatch(() => model.create(plainData), resultHandlers_1.portalError);
exports.saveDocument = (doc) => TE.tryCatch(() => doc.save(), resultHandlers_1.portalError);
exports.findDocumentById = (model) => (id) => TE.tryCatch(() => model.findById(id).exec(), resultHandlers_1.portalError);
exports.findDocumentByKey = (model, key) => (keyValue) => TE.tryCatch(() => model.findOne({ [key]: keyValue }).exec(), resultHandlers_1.portalError);
exports.findManyDocumentsByIds = (model) => (ids) => TE.tryCatch(() => model
    .find()
    .where('_id')
    .in(ids)
    .exec(), resultHandlers_1.portalError);
// export const findManyDocumentsByIdsAdmin = <A extends Document>(model: Model<A>) => (ids: string[]): RTE.ReaderTaskEither<AccountContext, PortalError[], A[]> => (
//     context: AccountContext,
// ) =>
//     pipe(
//         context,
//         (c) => (c.level === AuthLevelEnum.ADMIN ? E.right(c) : E.left(`auth error for ${c.level} account context level`)),
//         TE.fromEither,
//         TE.mapLeft(portalError),
//         TE.chain((_) =>
//             TE.tryCatch<PortalError[], A[]>(
//                 () =>
//                     model
//                         .find()
//                         .where('_id')
//                         .in(ids)
//                         .exec(),
//                 portalError,
//             ),
//         ),
//     );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2VVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbW1vbi9tb25nb29zZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQTZDO0FBRTdDLDJDQUEyQztBQUk5QixRQUFBLGNBQWMsR0FBRyxDQUF3QixLQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBWSxFQUFtQyxFQUFFLENBQ3hILEVBQUUsQ0FBQyxRQUFRLENBQW1CLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsNEJBQVcsQ0FBQyxDQUFDO0FBRWpFLFFBQUEsWUFBWSxHQUFHLENBQXFCLEdBQU0sRUFBbUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQW1CLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSw0QkFBVyxDQUFDLENBQUM7QUFFN0ksUUFBQSxnQkFBZ0IsR0FBRyxDQUFxQixLQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBVSxFQUFtQyxFQUFFLENBQ3JILEVBQUUsQ0FBQyxRQUFRLENBQW1CLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsNEJBQVcsQ0FBQyxDQUFDO0FBRW5FLFFBQUEsaUJBQWlCLEdBQUcsQ0FBd0MsS0FBZSxFQUFFLEdBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFjLEVBQUUsRUFBRSxDQUNwSCxFQUFFLENBQUMsUUFBUSxDQUFtQixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLDRCQUFXLENBQUMsQ0FBQztBQUVqRixRQUFBLHNCQUFzQixHQUFHLENBQXFCLEtBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFhLEVBQUUsRUFBRSxDQUM3RixFQUFFLENBQUMsUUFBUSxDQUNQLEdBQUcsRUFBRSxDQUNELEtBQUs7S0FDQSxJQUFJLEVBQUU7S0FDTixLQUFLLENBQUMsS0FBSyxDQUFDO0tBQ1osRUFBRSxDQUFDLEdBQUcsQ0FBQztLQUNQLElBQUksRUFBRSxFQUNmLDRCQUFXLENBQ2QsQ0FBQztBQUVOLHFLQUFxSztBQUNySywrQkFBK0I7QUFDL0IsT0FBTztBQUNQLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsNkhBQTZIO0FBQzdILHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFDbkMsMEJBQTBCO0FBQzFCLCtDQUErQztBQUMvQyx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTIn0=