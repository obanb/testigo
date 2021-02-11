"use strict";
// import {pipe} from 'fp-ts/lib/pipeable';
// import {PostDocument, postModel, PlainPostDocument} from '../../../database/post';
// import {
//     PostStatusEnum,
//     CreatePostInput,
//     PortalError,
//     TemporaryAdminEnum,
//     TemporaryUserEnum,
//     SetManyStatusesInput,
//     SetManySystemMessagesInput,
//     SetManyErrorMessagesInput,
// } from 'up-graphql';
// import {createDocument, findDocumentById, findManyDocumentsByIds, findManyDocumentsByIdsAdmin, saveDocument} from '../../common/mongooseUtils';
// import * as TE from 'fp-ts/lib/TaskEither';
// import * as E from 'fp-ts/lib/Either';
// import * as RTE from 'fp-ts/lib/ReaderTaskEither';
// import {toPortalErrors} from '../../common/resultHandlers';
// import {validateCreatePostInput} from './postValidations';
// import {BlogDocument, blogModel} from '../../../database/blog';
// import {sequenceT} from 'fp-ts/lib/Apply';
// import {taskEither} from 'fp-ts/lib/TaskEither';
// import {array} from 'fp-ts/lib/Array';
// import {Semigroup} from 'fp-ts/lib/Semigroup';
// import {Monad2C} from 'fp-ts/lib/Monad';
// import {flow} from 'fp-ts/lib/function';
// import {AccountContext} from '../../fakeAccountContext/fakeAccountContext';
// import {withCreatedAndUpdated} from '../../common/withs';
//
// export const postService = () => ({
//     /**
//      * chained taskEither with validation throw sequenceT and lefts concat apply with semigroup
//      */
//     create: (input: CreatePostInput): TE.TaskEither<PortalError[], PostDocument> =>
//         pipe(input, validateCreatePostInput, E.mapLeft(toPortalErrors), TE.fromEither, TE.chain(preparePlainPostDocument), TE.chain(createPostDocument)),
//
//     /**
//      * multiple traversed taskEither set with sequenceT
//      */
//     moveMany: (postIds: string[]) => (blogId: string): TE.TaskEither<PortalError[], PostDocument[]> =>
//         pipe(
//             sequenceT(TE.taskEither)(findManyDocumentsByIds(postModel)(postIds), findDocumentById(blogModel)(blogId)),
//             TE.chain(([posts, blog]) => array.traverse(taskEither)(posts, movePostToBlog(blog))),
//         ),
//
/**
 *  multiple taskEither  with left semigroup concat throw sequence  extended applicative apply
 */
//     setStatusToMany: ({postsIds, status}: SetManyStatusesInput): TE.TaskEither<PortalError[], PostDocument[]> =>
//         pipe(
//             findManyDocumentsByIds(postModel)(postsIds),
//             TE.map((posts) => array.map(posts, setStatusToBlog(status))),
//             TE.chain((results) => pipe(array.sequence(taskEitherLeftConcat(getSemigroupArray<PortalError>()))(results))),
//         ),
//
//     /**
//      *  multiple traversed taskEither  with mapLefts and  setSystemMessage try inside mapLeft instead, dirty practive, example only!
//      */
//     setErrorMessagesToMany: ({postsIds, message}: SetManySystemMessagesInput): TE.TaskEither<PortalError[], PostDocument[]> =>
//         pipe(
//             findManyDocumentsByIds(postModel)(postsIds),
//             TE.chain((posts) =>
//                 array.traverse(taskEither)(posts, (post) =>
//                     flow(
//                         setErrorMessage(message),
//                         TE.mapLeft((left) =>
//                             pipe(
//                                 post,
//                                 setSystemMessage(`error message set failed, so try set system message with errors: ${JSON.stringify(left)}`),
//                                 (_) => left,
//                             ),
//                         ),
//                     )(post),
//                 ),
//             ),
//         ),
//
//     /**
//      *  multiple traversed readerTaskEithers with configuration context
//      */
//     setSystemMessagesToMany: ({postsIds, message}: SetManyErrorMessagesInput) =>
//         pipe(
//             RTE.ask<AccountContext>(),
//             RTE.chain(() => findManyDocumentsByIdsAdmin(postModel)(postsIds)),
//             RTE.chain((posts) => (context) => array.traverse(TE.taskEither)(posts, setSystemMessage(`${message} with caused by ${context.account}`))),
//         ),
// });
//
// const createPostDocument = (plainPostDocument: PlainPostDocument): TE.TaskEither<PortalError[], PostDocument> =>
//     pipe(plainPostDocument, createDocument(postModel));
//
// const preparePlainPostDocument = (input: CreatePostInput): TE.TaskEither<PortalError[], PlainPostDocument> =>
//     pipe(
//         {
//             content: input.content,
//             owner: TemporaryAdminEnum.DEFAULTADMIN1,
//             createdBy: TemporaryUserEnum.DEFAULTUSER2,
//             status: PostStatusEnum.ACTIVE,
//             createdAt: undefined,
//             lastUpdate: undefined,
//             error: false,
//             blog: undefined,
//         },
//         withCreatedAndUpdated,
//         populatePostBlog(input.blogId),
//     );
//
// const populatePostBlog = (blogId: string) => (plainPostDocument: PlainPostDocument) =>
//     pipe(
//         blogId,
//         findDocumentById(blogModel),
//         TE.map((blogDocument) => ({
//             ...plainPostDocument,
//             owner: blogDocument.owner,
//             blog: blogDocument,
//         })),
//     );
//
// const movePostToBlog = (blog: BlogDocument) => (post: PostDocument): TE.TaskEither<PortalError[], PostDocument> =>
//     pipe(
//         post,
//         (post) => {
//             post.blog = blog;
//             return post;
//         },
//         saveDocument,
//     );
//
// const setStatusToBlog = (status: PostStatusEnum) => (post: PostDocument): TE.TaskEither<PortalError[], PostDocument> =>
//     pipe(
//         post,
//         (post) => {
//             post.status = status;
//             return post;
//         },
//         saveDocument,
//     );
//
// const setSystemMessage = (message: string) => (post: PostDocument): TE.TaskEither<PortalError[], PostDocument> =>
//     pipe(
//         post,
//         (post) => {
//             post.systemMessages.push(message);
//             return post;
//         },
//         saveDocument,
//     );
//
// const setErrorMessage = (message: string) => (post: PostDocument): TE.TaskEither<PortalError[], PostDocument> =>
//     pipe(
//         post,
//         (post) => {
//             post.error = true;
//             post.errorMessage = message;
//             return post;
//         },
//         saveDocument,
//     );
//
// const getSemigroupArray = <A>(): Semigroup<A[]> => ({
//     concat: (x, y) => [...x, ...y],
// });
//
// /**
//  * extended applicative for apply inside sequence/sequenceT for semigroup concat of taskEither left sides
//  */
//
// const taskEitherLeftConcat = <TError>(semi: Semigroup<TError[]>): Monad2C<typeof TE.URI, TError[]> => ({
//     URI: TE.URI,
//     _E: undefined as any,
//     map: TE.taskEither.map, // (TaskEither<TError,A>,fn(A => B) => TaskEither<TError,B>
//     of: TE.taskEither.of, // (A) => TaskEither<TError, A>
//     ap: (mab, ma) => () =>
//         Promise.all([mab(), ma()]).then(([f, val]) =>
//             E.isLeft(f) ? (E.isLeft(val) ? E.left(semi.concat(f.left, val.left)) : f) : E.isLeft(val) ? val : E.right(f.right(val.right)),
//         ),
//     chain: TE.taskEither.chain,
// });
//
//
//
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wb3N0L2NvcmUvcG9zdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEyQztBQUMzQyxxRkFBcUY7QUFDckYsV0FBVztBQUNYLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsdUJBQXVCO0FBQ3ZCLGtKQUFrSjtBQUNsSiw4Q0FBOEM7QUFDOUMseUNBQXlDO0FBQ3pDLHFEQUFxRDtBQUNyRCw4REFBOEQ7QUFDOUQsNkRBQTZEO0FBQzdELGtFQUFrRTtBQUNsRSw2Q0FBNkM7QUFDN0MsbURBQW1EO0FBQ25ELHlDQUF5QztBQUN6QyxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4RUFBOEU7QUFDOUUsNERBQTREO0FBQzVELEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsVUFBVTtBQUNWLGtHQUFrRztBQUNsRyxVQUFVO0FBQ1Ysc0ZBQXNGO0FBQ3RGLDRKQUE0SjtBQUM1SixFQUFFO0FBQ0YsVUFBVTtBQUNWLDBEQUEwRDtBQUMxRCxVQUFVO0FBQ1YseUdBQXlHO0FBQ3pHLGdCQUFnQjtBQUNoQix5SEFBeUg7QUFDekgsb0dBQW9HO0FBQ3BHLGFBQWE7QUFDYixFQUFFO0FBQ0U7O0dBRUc7QUFDUCxtSEFBbUg7QUFDbkgsZ0JBQWdCO0FBQ2hCLDJEQUEyRDtBQUMzRCw0RUFBNEU7QUFDNUUsNEhBQTRIO0FBQzVILGFBQWE7QUFDYixFQUFFO0FBQ0YsVUFBVTtBQUNWLHVJQUF1STtBQUN2SSxVQUFVO0FBQ1YsaUlBQWlJO0FBQ2pJLGdCQUFnQjtBQUNoQiwyREFBMkQ7QUFDM0Qsa0NBQWtDO0FBQ2xDLDhEQUE4RDtBQUM5RCw0QkFBNEI7QUFDNUIsb0RBQW9EO0FBQ3BELCtDQUErQztBQUMvQyxvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDLGdKQUFnSjtBQUNoSiwrQ0FBK0M7QUFDL0MsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsRUFBRTtBQUNGLFVBQVU7QUFDViwwRUFBMEU7QUFDMUUsVUFBVTtBQUNWLG1GQUFtRjtBQUNuRixnQkFBZ0I7QUFDaEIseUNBQXlDO0FBQ3pDLGlGQUFpRjtBQUNqRix5SkFBeUo7QUFDekosYUFBYTtBQUNiLE1BQU07QUFDTixFQUFFO0FBQ0YsbUhBQW1IO0FBQ25ILDBEQUEwRDtBQUMxRCxFQUFFO0FBQ0YsZ0hBQWdIO0FBQ2hILFlBQVk7QUFDWixZQUFZO0FBQ1osc0NBQXNDO0FBQ3RDLHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQyxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixhQUFhO0FBQ2IsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQyxTQUFTO0FBQ1QsRUFBRTtBQUNGLHlGQUF5RjtBQUN6RixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHVDQUF1QztBQUN2QyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUN6QyxrQ0FBa0M7QUFDbEMsZUFBZTtBQUNmLFNBQVM7QUFDVCxFQUFFO0FBQ0YscUhBQXFIO0FBQ3JILFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQywyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsRUFBRTtBQUNGLDBIQUEwSDtBQUMxSCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLHNCQUFzQjtBQUN0QixvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsU0FBUztBQUNULEVBQUU7QUFDRixvSEFBb0g7QUFDcEgsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixzQkFBc0I7QUFDdEIsaURBQWlEO0FBQ2pELDJCQUEyQjtBQUMzQixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCxFQUFFO0FBQ0YsbUhBQW1IO0FBQ25ILFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLGlDQUFpQztBQUNqQywyQ0FBMkM7QUFDM0MsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsU0FBUztBQUNULEVBQUU7QUFDRix3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLE1BQU07QUFDTixFQUFFO0FBQ0YsTUFBTTtBQUNOLDRHQUE0RztBQUM1RyxNQUFNO0FBQ04sRUFBRTtBQUNGLDJHQUEyRztBQUMzRyxtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLDBGQUEwRjtBQUMxRiw0REFBNEQ7QUFDNUQsNkJBQTZCO0FBQzdCLHdEQUF3RDtBQUN4RCw2SUFBNkk7QUFDN0ksYUFBYTtBQUNiLGtDQUFrQztBQUNsQyxNQUFNO0FBQ04sRUFBRTtBQUNGLEVBQUU7QUFDRixFQUFFIn0=