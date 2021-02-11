"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_schema_tools_1 = require("graphql-schema-tools");
const graphql_import_1 = require("graphql-import");
const test_graphql_resolvers_1 = require("../modules/test/shell/test.graphql.resolvers");
const graphQlSchemaFile = 'node_modules\\StgGraphql\\graphql.schema.graphql';
// const graphQlSchemaFile: string = '/home/archie/Plocha/dev/StgBackend/node_modules/StgGraphql/graphql.schema.graphql';
const resolvers = {
    Query: {
        ...test_graphql_resolvers_1.testGraphqlResolvers.Queries,
    },
};
const schema = graphql_schema_tools_1.makeExecutableSchema({
    typeDefs: [graphql_import_1.importSchema(graphQlSchemaFile)],
    resolvers: {},
});
exports.schema = schema;
graphql_schema_tools_1.addResolveFunctionsToSchema(schema, resolvers);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtEQUF1RjtBQUN2RixtREFBNEM7QUFDNUMseUZBQWtGO0FBRWxGLE1BQU0saUJBQWlCLEdBQVcsa0RBQWtELENBQUM7QUFDckYseUhBQXlIO0FBRXpILE1BQU0sU0FBUyxHQUFRO0lBQ25CLEtBQUssRUFBRTtRQUNILEdBQUcsNkNBQW9CLENBQUMsT0FBTztLQUNsQztDQUNKLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBa0IsMkNBQW9CLENBQUM7SUFDL0MsUUFBUSxFQUFFLENBQUMsNkJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLFNBQVMsRUFBRSxFQUFFO0NBQ2hCLENBQUMsQ0FBQztBQUlLLHdCQUFNO0FBRmQsa0RBQTJCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDIn0=