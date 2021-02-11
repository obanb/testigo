"use strict";
// import {pipe} from 'fp-ts/lib/pipeable';
// import {CreatePostInput} from 'up-graphql';
// import {sequenceT} from 'fp-ts/lib/Apply';
// import {Semigroup} from 'fp-ts/lib/Semigroup';
// import {Monad2C} from 'fp-ts/lib/Monad';
// import * as E from 'fp-ts/lib/Either';
// import * as O from 'fp-ts/lib/Option';
//
//
// /**
//  *  multiple either left semigroup concat throw sequenceT extended applicative apply
//  */
//
// export const validateCreatePostInput = (input: CreatePostInput): E.Either<string[], CreatePostInput> => {
//     return pipe(
//         sequenceT(eitherLeftConcat(getSemigroupArray<string>()))(validateContent(input)),
//         E.map(() => input),
//     );
// };
//
// export const validateContent = (input: CreatePostInput): E.Either<string[], CreatePostInput> =>
//     pipe(
//         input,
//         O.fromNullable,
//         O.mapNullable((inp) => inp.content),
//         E.fromOption(() => ['missing content']),
//         E.chain((title) => (title.length > 100 ? E.left(['maximum 100 characters']) : E.right(input))),
//     );
//
//
// /**
//  * extended applicative for apply inside sequence/sequenceT for semigroup concat of either left sides
//  */
//
// const eitherLeftConcat = <TError>(semi: Semigroup<TError[]>): Monad2C<typeof E.URI, TError[]> => ({
//     URI: E.URI,
//     _E: undefined as any,
//     map: E.either.map, // (either<TError,A>,fn(A => B) => Either<TError,B>
//     of: E.either.of, // (A) => Either<TError, A>
//     ap: (mab, ma) => (E.isLeft(mab) ? (E.isLeft(ma) ? E.left(semi.concat(mab.left, ma.left)) : mab) : E.isLeft(ma) ? ma : E.right(mab.right(ma.right))), // (either<TError, fn(A => B)>, either<TError,A> => Either<TError,B> - aka unpack Either<TError, fn(A => B)> to Either<TError, B> aka put A right to fn(A) and wrap
//     chain: E.either.chain,
// });
//
// const getSemigroupArray = <A>(): Semigroup<A[]> => ({
//     concat: (x, y) => [...x, ...y],
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFZhbGlkYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcG9zdC9jb3JlL3Bvc3RWYWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQTJDO0FBQzNDLDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsaURBQWlEO0FBQ2pELDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLEVBQUU7QUFDRixFQUFFO0FBQ0YsTUFBTTtBQUNOLHVGQUF1RjtBQUN2RixNQUFNO0FBQ04sRUFBRTtBQUNGLDRHQUE0RztBQUM1RyxtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsS0FBSztBQUNMLEVBQUU7QUFDRixrR0FBa0c7QUFDbEcsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUIsK0NBQStDO0FBQy9DLG1EQUFtRDtBQUNuRCwwR0FBMEc7QUFDMUcsU0FBUztBQUNULEVBQUU7QUFDRixFQUFFO0FBQ0YsTUFBTTtBQUNOLHdHQUF3RztBQUN4RyxNQUFNO0FBQ04sRUFBRTtBQUNGLHNHQUFzRztBQUN0RyxrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLDZFQUE2RTtBQUM3RSxtREFBbUQ7QUFDbkQsK1RBQStUO0FBQy9ULDZCQUE2QjtBQUM3QixNQUFNO0FBQ04sRUFBRTtBQUNGLHdEQUF3RDtBQUN4RCxzQ0FBc0M7QUFDdEMsTUFBTSJ9