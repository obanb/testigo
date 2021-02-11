"use strict";
// import {pipe} from 'fp-ts/lib/pipeable';
// import {BlogDocument, blogModel, PlainBlogDocument} from '../../../database/blog';
// import {BlogStatusEnum, CreateBlogInput, PortalError, TemporaryAdminEnum} from 'up-graphql';
// import {createDocument} from '../../common/mongooseUtils';
// import * as TE from 'fp-ts/lib/TaskEither';
// import * as E from 'fp-ts/lib/Either';
// import {validateCreateBlogInput} from './blogValidations';
//
// import {toPortalErrors} from '../../common/resultHandlers';
// import {withCreatedAndUpdated} from '../../common/withs';
//
// export const blogService = () => ({
//     /**
//      * chained taskEither frin chained Either composition
//      */
//     create: (input: CreateBlogInput) =>
//         pipe(input, validateCreateBlogInput, E.mapLeft(toPortalErrors), E.map(preparePlainBlogDocument), TE.fromEither, TE.chain(createBlogDocument)),
// });
//
// const createBlogDocument = (plainBlogDocument: PlainBlogDocument): TE.TaskEither<PortalError[], BlogDocument> =>
//     pipe(plainBlogDocument, createDocument(blogModel));
//
// const preparePlainBlogDocument = (input: CreateBlogInput): PlainBlogDocument =>
//     pipe(
//         {
//             title: input.title,
//             description: input.description,
//             owner: TemporaryAdminEnum.DEFAULTADMIN1,
//             hashTags: input.hashTags,
//             category: input.category,
//             subcategory: input.subcategory,
//             status: BlogStatusEnum.ACTIVE,
//             createdAt: undefined,
//             lastUpdate: undefined,
//             error: false,
//         },
//         withCreatedAndUpdated,
//     );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ibG9nL2NvcmUvYmxvZ1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEyQztBQUMzQyxxRkFBcUY7QUFDckYsK0ZBQStGO0FBQy9GLDZEQUE2RDtBQUM3RCw4Q0FBOEM7QUFDOUMseUNBQXlDO0FBQ3pDLDZEQUE2RDtBQUM3RCxFQUFFO0FBQ0YsOERBQThEO0FBQzlELDREQUE0RDtBQUM1RCxFQUFFO0FBQ0Ysc0NBQXNDO0FBQ3RDLFVBQVU7QUFDViw0REFBNEQ7QUFDNUQsVUFBVTtBQUNWLDBDQUEwQztBQUMxQyx5SkFBeUo7QUFDekosTUFBTTtBQUNOLEVBQUU7QUFDRixtSEFBbUg7QUFDbkgsMERBQTBEO0FBQzFELEVBQUU7QUFDRixrRkFBa0Y7QUFDbEYsWUFBWTtBQUNaLFlBQVk7QUFDWixrQ0FBa0M7QUFDbEMsOENBQThDO0FBQzlDLHVEQUF1RDtBQUN2RCx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0Msb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQyw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLGlDQUFpQztBQUNqQyxTQUFTIn0=