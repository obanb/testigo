"use strict";
// import * as express from 'express';
// import {pipe} from 'fp-ts/pipeable';
// import * as H from 'hyper-ts';
// import {toRequestHandler} from 'hyper-ts/lib/express';
// import * as E from 'fp-ts/lib/Either';
// import {failure} from 'io-ts/lib/PathReporter';
// const router = express.Router();
// import * as t from 'io-ts';
//
// export const xlsxHeaderLine = t.interface({
//     header: t.string,
//     property: t.string,
// });
//
// export const mongoQueryInput = t.interface({
//     query: t.unknown,
//     collection: t.string,
//     projection: t.interface({
//         type: t.string,
//         list: t.array(xlsxHeaderLine),
//     }),
//     config: t.interface({
//         allowEmpty: t.boolean,
//     }),
// });
//
// function badRequest(message: Error): H.Middleware<H.StatusOpen, H.ResponseEnded, never, void> {
//     return pipe(
//         H.status(H.Status.BadRequest),
//         H.ichain(() => H.closeHeaders()),
//         H.ichain(() => H.send(message.message)),
//     );
// }
//
// type WithErrorRequest = typeof H.Status.BadRequest | typeof H.Status.BadGateway | typeof H.Status.InternalServerError;
//
// const withErrorCode = (status: WithErrorRequest) => (message: Error) =>
//     pipe(
//         H.status(status),
//         H.ichain(() => H.closeHeaders()),
//         H.ichain(() => H.send(message.message)),
//     );
//
// const paramDecode = pipe(
//     H.decodeBody(mongoQueryInput.decode),
//     H.mapLeft((e) => new Error(failure(e).join('\n'))),
//     H.ichain((body) =>
//         pipe(
//             H.status<Error>(H.Status.OK),
//             H.ichain(() => H.json(body, E.toError)),
//         ),
//     ),
//     H.orElse(withErrorCode(H.Status.BadRequest)),
// );
//
// router.route('/mongoquery').post(toRequestHandler(paramDecode));
//
// export {router};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBQ3ZDLGlDQUFpQztBQUNqQyx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLGtEQUFrRDtBQUNsRCxtQ0FBbUM7QUFDbkMsOEJBQThCO0FBQzlCLEVBQUU7QUFDRiw4Q0FBOEM7QUFDOUMsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQixNQUFNO0FBQ04sRUFBRTtBQUNGLCtDQUErQztBQUMvQyx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLFVBQVU7QUFDViw0QkFBNEI7QUFDNUIsaUNBQWlDO0FBQ2pDLFVBQVU7QUFDVixNQUFNO0FBQ04sRUFBRTtBQUNGLGtHQUFrRztBQUNsRyxtQkFBbUI7QUFDbkIseUNBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtREFBbUQ7QUFDbkQsU0FBUztBQUNULElBQUk7QUFDSixFQUFFO0FBQ0YseUhBQXlIO0FBQ3pILEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUsWUFBWTtBQUNaLDRCQUE0QjtBQUM1Qiw0Q0FBNEM7QUFDNUMsbURBQW1EO0FBQ25ELFNBQVM7QUFDVCxFQUFFO0FBQ0YsNEJBQTRCO0FBQzVCLDRDQUE0QztBQUM1QywwREFBMEQ7QUFDMUQseUJBQXlCO0FBQ3pCLGdCQUFnQjtBQUNoQiw0Q0FBNEM7QUFDNUMsdURBQXVEO0FBQ3ZELGFBQWE7QUFDYixTQUFTO0FBQ1Qsb0RBQW9EO0FBQ3BELEtBQUs7QUFDTCxFQUFFO0FBQ0YsbUVBQW1FO0FBQ25FLEVBQUU7QUFDRixtQkFBbUIifQ==