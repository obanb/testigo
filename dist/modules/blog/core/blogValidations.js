"use strict";
// import {pipe} from 'fp-ts/lib/pipeable';
// import {CreateBlogInput} from 'up-graphql';
// import {sequenceT} from 'fp-ts/lib/Apply';
// import {Semigroup} from 'fp-ts/lib/Semigroup';
// import {Monad2C} from 'fp-ts/lib/Monad';
// import * as O from 'fp-ts/lib/Option';
// import * as E from 'fp-ts/lib/Either';
//
//
// /**
//  *  multiple either left semigroup concat throw sequenceT extended applicative apply
//  */
// export const validateCreateBlogInput = (input: CreateBlogInput): E.Either<string[], CreateBlogInput> => {
//     return pipe(
//         sequenceT(eitherLeftConcat(getSemigroupArray<string>()))(validateTitle(input), validateDescription(input)),
//         E.map(() => input),
//     );
// };
//
// export const validateTitle = (input: CreateBlogInput): E.Either<string[], CreateBlogInput> =>
//     pipe(
//         input,
//         O.fromNullable,
//         O.mapNullable((inp) => inp.title),
//         E.fromOption(() => ['missing title']),
//         E.chain((title) => (title.length > 30 ? E.left(['maximum 30 characters']) : E.right(input))),
//     );
//
// export const validateDescription = (input: CreateBlogInput): E.Either<string[], CreateBlogInput> =>
//     pipe(
//         input,
//         O.fromNullable,
//         O.mapNullable((inp) => inp.description),
//         E.fromOption(() => ['missing description']),
//         E.chain((description) => (description.length > 100 ? E.left(['maximum 100 characters']) : E.right(input))),
//     );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ1ZhbGlkYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYmxvZy9jb3JlL2Jsb2dWYWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQTJDO0FBQzNDLDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsaURBQWlEO0FBQ2pELDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLEVBQUU7QUFDRixFQUFFO0FBQ0YsTUFBTTtBQUNOLHVGQUF1RjtBQUN2RixNQUFNO0FBQ04sNEdBQTRHO0FBQzVHLG1CQUFtQjtBQUNuQixzSEFBc0g7QUFDdEgsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxLQUFLO0FBQ0wsRUFBRTtBQUNGLGdHQUFnRztBQUNoRyxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQiw2Q0FBNkM7QUFDN0MsaURBQWlEO0FBQ2pELHdHQUF3RztBQUN4RyxTQUFTO0FBQ1QsRUFBRTtBQUNGLHNHQUFzRztBQUN0RyxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQixtREFBbUQ7QUFDbkQsdURBQXVEO0FBQ3ZELHNIQUFzSDtBQUN0SCxTQUFTO0FBQ1QsRUFBRTtBQUNGLE1BQU07QUFDTix3R0FBd0c7QUFDeEcsTUFBTTtBQUNOLEVBQUU7QUFDRixzR0FBc0c7QUFDdEcsa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1Qiw2RUFBNkU7QUFDN0UsbURBQW1EO0FBQ25ELCtUQUErVDtBQUMvVCw2QkFBNkI7QUFDN0IsTUFBTTtBQUNOLEVBQUU7QUFDRix3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLE1BQU0ifQ==