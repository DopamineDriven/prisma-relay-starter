import { GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { asNexusMethod } from "nexus";

export const DatetimeScalar = asNexusMethod(
  new GraphQLScalarType({
    name: "DateTime"
  }),
  "DateTime",
  typeof new Date
);
