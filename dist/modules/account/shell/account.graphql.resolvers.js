"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeable_1 = require("fp-ts/lib/pipeable");
const TE = require("fp-ts/lib/TaskEither");
const resultHandlers_1 = require("../../common/resultHandlers");
const accountService_1 = require("../core/accountService");
exports.accountGraphqlResolvers = {
    mutation: {
        account: () => ({
            activate: (args, context) => pipeable_1.pipe(args.input, accountService_1.accountService().activate, TE.fold(resultHandlers_1.errorResultP, resultHandlers_1.successResultP))(),
            deactivate: (args, context) => pipeable_1.pipe(args.input, accountService_1.accountService().deactivate, TE.fold(resultHandlers_1.errorResultP, resultHandlers_1.successResultP))(),
            sendSystemMessage: (args, context) => pipeable_1.pipe(args.input, accountService_1.accountService().sendSystemMessage, TE.fold(resultHandlers_1.errorResultP, resultHandlers_1.successResultP))(),
        }),
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5ncmFwaHFsLnJlc29sdmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2FjY291bnQvc2hlbGwvYWNjb3VudC5ncmFwaHFsLnJlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLGlEQUF3QztBQUN4QywyQ0FBMkM7QUFDM0MsZ0VBQXVGO0FBQ3ZGLDJEQUFzRDtBQWF6QyxRQUFBLHVCQUF1QixHQUE0QjtJQUM1RCxRQUFRLEVBQUU7UUFDTixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLElBQWlDLEVBQUUsT0FBWSxFQUFFLEVBQUUsQ0FBQyxlQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSwrQkFBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQVksRUFBRSwrQkFBYyxDQUFDLENBQUMsRUFBRTtZQUNuSixVQUFVLEVBQUUsQ0FBQyxJQUFtQyxFQUFFLE9BQVksRUFBRSxFQUFFLENBQzlELGVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLCtCQUFjLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBWSxFQUFFLCtCQUFjLENBQUMsQ0FBQyxFQUFFO1lBQzFGLGlCQUFpQixFQUFFLENBQUMsSUFBMEMsRUFBRSxPQUFZLEVBQUUsRUFBRSxDQUM1RSxlQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSwrQkFBYyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBWSxFQUFFLCtCQUFjLENBQUMsQ0FBQyxFQUFFO1NBQ3BHLENBQUM7S0FDTDtDQUNKLENBQUMifQ==