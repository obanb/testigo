"use strict";
// import {Document, model, Model, Schema} from 'mongoose';
// import {BlogCategoryEnum, BlogStatusEnum, BlogSubcategoryEnum, PostStatusEnum, TemporaryAdminEnum, TemporaryUserEnum} from 'up-graphql';
// import {BlogDocument, blogModel} from './blog';
//
// export interface PlainPostDocument {
//     content: string;
//     blog: BlogDocument;
//     createdBy?: TemporaryUserEnum | TemporaryAdminEnum;
//     owner?: TemporaryAdminEnum;
//     createdAt: string;
//     lastUpdate: string;
//     error: boolean;
//     errorMessage?: string;
//     status: PostStatusEnum;
//     systemMessages?: string[];
// }
//
// export interface PostDocument extends PlainPostDocument, Document {}
//
// export const postSchema = new Schema({
//     content: {
//         type: String,
//         required: true,
//     },
//     blog: {type: Schema.Types.ObjectId, required: true, ref: blogModel.modelName, index: true},
//     createdBy: {
//         type: String,
//         required: false,
//     },
//     owner: {
//         type: String,
//         required: false,
//     },
//     createdAt: {
//         type: String,
//         required: true,
//     },
//     lastUpdate: {
//         type: String,
//         required: true,
//     },
//     error: {
//         type: Boolean,
//         required: true,
//         default: false,
//     },
//     errorMessage: {
//         type: String,
//         required: false,
//     },
//     status: {
//         type: String,
//         required: true,
//     },
//     systemMessages: {
//         type: [String],
//         required: false,
//     },
// });
//
// export const postModel: Model<PostDocument> = model<PostDocument>('post', postSchema, 'posts');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyREFBMkQ7QUFDM0QsMklBQTJJO0FBQzNJLGtEQUFrRDtBQUNsRCxFQUFFO0FBQ0YsdUNBQXVDO0FBQ3ZDLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsMERBQTBEO0FBQzFELGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0osRUFBRTtBQUNGLHVFQUF1RTtBQUN2RSxFQUFFO0FBQ0YseUNBQXlDO0FBQ3pDLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCxrR0FBa0c7QUFDbEcsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0IsU0FBUztBQUNULGVBQWU7QUFDZix3QkFBd0I7QUFDeEIsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1Qsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QiwwQkFBMEI7QUFDMUIsU0FBUztBQUNULGVBQWU7QUFDZix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0IsU0FBUztBQUNULGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1QsTUFBTTtBQUNOLEVBQUU7QUFDRixrR0FBa0cifQ==