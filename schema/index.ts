import { makeSchema, connectionPlugin, core, idArg } from "nexus";
import { GraphQLScalarType } from "graphql";
import * as typeDefs from "./definitions";
import * as path from "path";
import { prisma, PrismaClient } from "@prisma/client";
import { Context } from './context';

const nodeModulePath = path.join(
  __dirname,
  "..",
  "node_modules",
  ".prisma",
  "client",
  "index.d.ts"
);

const localPath = require.resolve("./context");

const schema = makeSchema({
  types: [typeDefs],
  plugins: [
    connectionPlugin({
      includeNodesField: true, // relay spec pagination
      strictArgs: true
    })
  ],
  contextType: {
    module: localPath,
    export: "Context"
  },
  shouldGenerateArtifacts: process.env.NODE_ENV !== "production",
  outputs: {
    typegen: path.join(__dirname, "..", "nexus-typegen.ts"),
    schema: path.join(__dirname, "..", "schema.graphql")
  }
});
export default schema;
