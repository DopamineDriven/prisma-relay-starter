import { GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { asNexusMethod } from "nexus";

declare const GraphQLJSONObjectConfig: GraphQLScalarTypeConfig<object, object>;

export const JsonScalar = asNexusMethod(
  new GraphQLScalarType({
    name: "Json"
  }),
  "Json",
  typeof JSON
);
