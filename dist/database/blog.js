"use strict";
// import {Document, model, Model, Schema} from 'mongoose';
// import {BlogCategoryEnum, BlogStatusEnum, BlogSubcategoryEnum, TemporaryAdminEnum} from 'up-graphql';
//
// export interface PlainBlogDocument {
//     title: string;
//     description: string;
//     owner: TemporaryAdminEnum;
//     category: BlogCategoryEnum[];
//     subcategory: BlogSubcategoryEnum[];
//     createdAt: string;
//     lastUpdate: string;
//     error: boolean;
//     errorMessage?: string;
//     hashTags?: string[];
//     status: BlogStatusEnum;
//     systemMessages?: string[];
// }
//
// export interface BlogDocument extends PlainBlogDocument, Document {}
//
// export const blogSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     owner: {
//         type: String,
//         required: true,
//     },
//     category: {
//         type: [String],
//         required: false,
//     },
//     subcategory: {
//         type: [String],
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
//     hashTags: {
//         type: [String],
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
// export const blogModel: Model<BlogDocument> = model<BlogDocument>('blog', blogSchema, 'blogs');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9ibG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyREFBMkQ7QUFDM0Qsd0dBQXdHO0FBQ3hHLEVBQUU7QUFDRix1Q0FBdUM7QUFDdkMscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsb0NBQW9DO0FBQ3BDLDBDQUEwQztBQUMxQyx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMsSUFBSTtBQUNKLEVBQUU7QUFDRix1RUFBdUU7QUFDdkUsRUFBRTtBQUNGLHlDQUF5QztBQUN6QyxlQUFlO0FBQ2Ysd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1QscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QiwwQkFBMEI7QUFDMUIsU0FBUztBQUNULGVBQWU7QUFDZix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1QscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsU0FBUztBQUNULG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCxvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1QsZUFBZTtBQUNmLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsU0FBUztBQUNULGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1QsTUFBTTtBQUNOLEVBQUU7QUFDRixrR0FBa0cifQ==