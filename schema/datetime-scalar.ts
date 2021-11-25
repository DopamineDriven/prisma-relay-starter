import { DateTimeResolver } from "graphql-scalars";
import { GraphQLScalarType } from "graphql";
import { asNexusMethod } from "nexus";

export const DatetimeScalar = asNexusMethod(
  new GraphQLScalarType({
    ...DateTimeResolver,
    name: "DateTime"
  }),
  "DateTime",
  typeof DateTimeResolver
);
