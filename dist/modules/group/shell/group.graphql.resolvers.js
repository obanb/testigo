"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeable_1 = require("fp-ts/lib/pipeable");
const TE = require("fp-ts/lib/TaskEither");
const resultHandlers_1 = require("../../common/resultHandlers");
const groupService_1 = require("../core/groupService");
exports.groupGraphqlResolvers = {
    mutation: {
        group: () => ({
            create: ({ input }) => pipeable_1.pipe(groupService_1.groupService().create(input), TE.fold(resultHandlers_1.errorResultP, resultHandlers_1.successResultP))(),
        }),
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuZ3JhcGhxbC5yZXNvbHZlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ncm91cC9zaGVsbC9ncm91cC5ncmFwaHFsLnJlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlEQUF3QztBQUN4QywyQ0FBMkM7QUFDM0MsZ0VBQXlFO0FBQ3pFLHVEQUFrRDtBQUVyQyxRQUFBLHFCQUFxQixHQUFHO0lBQ2pDLFFBQVEsRUFBRTtRQUNOLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQTBCLEVBQUUsRUFBRSxDQUN6QyxlQUFJLENBQ0EsMkJBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBWSxFQUFFLCtCQUFjLENBQUMsQ0FDeEMsRUFBRTtTQUNWLENBQUM7S0FDTDtDQUNKLENBQUMifQ==