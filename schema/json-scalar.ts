import { GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { asNexusMethod } from "nexus";
import { GraphQLJSONObjectConfig } from "graphql-scalars/scalars/json/JSONObject";

export const JsonScalar: GraphQLScalarTypeConfig<object, object> =
  asNexusMethod(
    new GraphQLScalarType({
      ...GraphQLJSONObjectConfig
    }),
    "Json",
    typeof GraphQLJSONObjectConfig
  );
