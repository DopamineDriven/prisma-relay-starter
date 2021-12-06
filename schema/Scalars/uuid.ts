import { asNexusMethod } from "nexus";
import { UUIDResolver, UUIDMock } from "graphql-scalars";
import { GraphQLScalarType } from "graphql";

export const uuidScalar = asNexusMethod(
  new GraphQLScalarType({
    ...UUIDResolver,
    name: "UUID"
  }),
  "UUID",
  typeof UUIDMock().toString()
);
