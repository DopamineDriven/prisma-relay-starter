import { makeSchema, connectionPlugin, core, idArg } from "nexus";
import { GraphQLScalarType } from "graphql";
import * as typeDefs from "./definitions";
import * as path from "path";

const nodeModulePath = path.join(
  __dirname,
  "..",
  "node_modules",
  ".prisma",
  "client",
  "index.d.ts"
);

const localPath = path.join(__dirname, "..", "/context/index.ts");

const schema = makeSchema({
  types: [typeDefs],
  plugins: [
    connectionPlugin({
      includeNodesField: true,
      strictArgs: true,
      disableBackwardPagination: false,
      disableForwardPagination: false,
      cursorFromNode(node) {
        return node.id;
      }
    })
  ],
  sourceTypes: {
    modules: [
      {
        module: path.join(
          __dirname,
          "..",
          "/node_modules/.prisma/client/index.d.ts"
        ),
        alias: "prisma"
      }
    ]
  },
  features: {
    abstractTypeStrategies: {
      __typename: true,
      resolveType: true
    }
  },
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
