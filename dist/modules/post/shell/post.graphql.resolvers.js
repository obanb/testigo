"use strict";
// import {
//     CreatePostMutationArgs, PortalError,
//     SetManyErrorMessagesPostMutationArgs,
//     SetManyStatusesPostMutationArgs,
//     SetManySystemMessagesPostMutationArgs,
//     TemporaryUserEnum,
// } from 'up-graphql';
// import {postService} from '../core/postService';
// import {pipe} from '../../../../node_modules/fp-ts/lib/pipeable';
// import * as TE from 'fp-ts/lib/TaskEither';
// import {getFakeUserContext} from '../../fakeAccountContext/fakeAccountContext';
// import {errorResultP, successResultP} from '../../common/resultHandlers';
//
// export const postGraphqlResolvers = {
//     mutation: {
//         post: () => ({
//             create: ({input}: CreatePostMutationArgs) =>
//                 pipe(
//                     postService().create(input),
//                     TE.fold(errorResultP, successResultP),
//                 )(),
//             setManyStatuses: ({input}: SetManyStatusesPostMutationArgs) =>
//                 pipe(
//                     postService().setStatusToMany(input),
//                     TE.fold(errorResultP, successResultP),
//                 )(),
//             setManySystemMessagers: ({input}: SetManySystemMessagesPostMutationArgs) =>
//                 pipe(
//                     postService().setSystemMessagesToMany(input)(getFakeUserContext(TemporaryUserEnum.DEFAULTUSER1, true)),
//                     TE.fold(errorResultP, successResultP),
//                 )(),
//             setManyErrorMessages: ({input}: SetManyErrorMessagesPostMutationArgs) =>
//                 pipe(
//                     postService().setErrorMessagesToMany(input),
//                     TE.fold(errorResultP, successResultP),
//                 )(),
//         }),
//     },
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5ncmFwaHFsLnJlc29sdmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Bvc3Qvc2hlbGwvcG9zdC5ncmFwaHFsLnJlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsV0FBVztBQUNYLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFDNUMsdUNBQXVDO0FBQ3ZDLDZDQUE2QztBQUM3Qyx5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLG1EQUFtRDtBQUNuRCxvRUFBb0U7QUFDcEUsOENBQThDO0FBQzlDLGtGQUFrRjtBQUNsRiw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLHdDQUF3QztBQUN4QyxrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDJEQUEyRDtBQUMzRCx3QkFBd0I7QUFDeEIsbURBQW1EO0FBQ25ELDZEQUE2RDtBQUM3RCx1QkFBdUI7QUFDdkIsNkVBQTZFO0FBQzdFLHdCQUF3QjtBQUN4Qiw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELHVCQUF1QjtBQUN2QiwwRkFBMEY7QUFDMUYsd0JBQXdCO0FBQ3hCLDhIQUE4SDtBQUM5SCw2REFBNkQ7QUFDN0QsdUJBQXVCO0FBQ3ZCLHVGQUF1RjtBQUN2Rix3QkFBd0I7QUFDeEIsbUVBQW1FO0FBQ25FLDZEQUE2RDtBQUM3RCx1QkFBdUI7QUFDdkIsY0FBYztBQUNkLFNBQVM7QUFDVCxLQUFLIn0=