"use strict";
// import {Collection, Db, MongoClient, MongoClientOptions} from 'mongodb';
// import * as TE from 'fp-ts/lib/TaskEither';
// import * as E from 'fp-ts/lib/Either';
// import {pipe} from '../../node_modules/fp-ts/lib/pipeable';
// import * as XLSX from 'xlsx';
// import {getConnectedClient, getDatabase} from './mongoExternal';
//
// interface HeaderLine {
//     header: string;
//     property: string;
// }
// interface QueryInput {
//     query: {};
//     collection: string;
//     projection: {
//         type: string;
//         list: HeaderLine[];
//     };
//     config: {
//         allowEmpty: boolean;
//     };
// }
//
// const uri = `mongodb+srv://admin:nimda@cluster0.6tq4i.mongodb.net/sample_training?retryWrites=true&w=majority`;
// const fakeInput: QueryInput = {
//     query: {name: 'Wetpaint'},
//     collection: 'companies',
//     projection: {type: 'property', list: [{header: 'URL', property: 'homepage_url'}]},
//     config: {
//         allowEmpty: false,
//     },
// };
//
// export const getRes = async () => {
//     const r = await pipe(
//         res(),
//         TE.fold((e) => e as any, (r) => () => r),
//     )();
//     return r;
// };
//
// const executeQuery = (input: QueryInput) => async (database: Db) => {
//     const coll = database.collection(input.collection);
//     // pipe(
//     //     database,
//     //     getCollection(input),
//     // );
//     const projection = input.projection.list.reduce((acu, next) => {
//         return {...acu, [next.property]: 1};
//     }, {});
//     const cursor = coll.find(input.query, {sort: {_id: 1}, projection: {_id: 0, ...projection}});
//     const result = await cursor.toArray();
//     return result;
// };
//
// const res = () =>
//     pipe(
//         getConnectedClient(uri),
//         TE.chain(getDatabase()),
//         TE.map(executeQuery(fakeInput)),
//     );
//
// interface DatabaseError {
//     type: 'DatabaseError';
//     errorMessage: string;
//     rawError: unknown;
// }
//
// const databaseError = (errorMessage: string) => (error: unknown): DatabaseError => ({
//     type: 'DatabaseError',
//     errorMessage,
//     rawError: error,
// });
//
// export const xlsxTemplate = async (headerLine: HeaderLine[]) => {
//     try {
//         const headerLines = headerLine.map((line) => line.header);
//
//         const rows = headerLine.map((line) => line.property);
//
//         return [headerLines, ...rows];
//     } catch (e) {
//         throw e;
//     }
// };
//
// export const generateXlsx = () => async (): Promise<any> => {
//     const template: any = null;
//
//     // název záložky v .xlsx
//     const wsName = 'Sestava';
//     const wb = XLSX.utils.book_new();
//     const ws = XLSX.utils.aoa_to_sheet(template);
//
//     // Šířky řádků podle počtu znaků
//     ws['!cols'] = template[0].map((header: string) => {
//         return {wch: header.length};
//     });
//
//     // add worksheet to workbook
//     XLSX.utils.book_append_sheet(wb, ws, wsName);
//
//     // generate file buffer
//     return XLSX.write(wb, {type: 'buffer'});
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyRUFBMkU7QUFDM0UsOENBQThDO0FBQzlDLHlDQUF5QztBQUN6Qyw4REFBOEQ7QUFDOUQsZ0NBQWdDO0FBQ2hDLG1FQUFtRTtBQUNuRSxFQUFFO0FBQ0YseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsMEJBQTBCO0FBQzFCLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsK0JBQStCO0FBQy9CLFNBQVM7QUFDVCxJQUFJO0FBQ0osRUFBRTtBQUNGLGtIQUFrSDtBQUNsSCxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQix5RkFBeUY7QUFDekYsZ0JBQWdCO0FBQ2hCLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsS0FBSztBQUNMLEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQixvREFBb0Q7QUFDcEQsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsRUFBRTtBQUNGLHdFQUF3RTtBQUN4RSwwREFBMEQ7QUFDMUQsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLHVFQUF1RTtBQUN2RSwrQ0FBK0M7QUFDL0MsY0FBYztBQUNkLG9HQUFvRztBQUNwRyw2Q0FBNkM7QUFDN0MscUJBQXFCO0FBQ3JCLEtBQUs7QUFDTCxFQUFFO0FBQ0Ysb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyxTQUFTO0FBQ1QsRUFBRTtBQUNGLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QixJQUFJO0FBQ0osRUFBRTtBQUNGLHdGQUF3RjtBQUN4Riw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixNQUFNO0FBQ04sRUFBRTtBQUNGLG9FQUFvRTtBQUNwRSxZQUFZO0FBQ1oscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRixnRUFBZ0U7QUFDaEUsRUFBRTtBQUNGLHlDQUF5QztBQUN6QyxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLFFBQVE7QUFDUixLQUFLO0FBQ0wsRUFBRTtBQUNGLGdFQUFnRTtBQUNoRSxrQ0FBa0M7QUFDbEMsRUFBRTtBQUNGLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFDaEMsd0NBQXdDO0FBQ3hDLG9EQUFvRDtBQUNwRCxFQUFFO0FBQ0YsdUNBQXVDO0FBQ3ZDLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsVUFBVTtBQUNWLEVBQUU7QUFDRixtQ0FBbUM7QUFDbkMsb0RBQW9EO0FBQ3BELEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsK0NBQStDO0FBQy9DLEtBQUsifQ==