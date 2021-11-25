import { makeSchema, connectionPlugin, convertSDL } from "nexus";
import { DateTimeResolver, JSONObjectResolver } from "graphql-scalars";
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

const localPath = require.resolve("./context");

export const schema = makeSchema({
  types: { ...typeDefs },
  plugins: [
    connectionPlugin({
      includeNodesField: true, // relay spec pagination
      nexusSchemaImportId: "",
      strictArgs: true,
      cursorFromNode(node) {
        return node.id;
      }
    })
  ],
  contextType: nodeModulePath
    ? {
        alias: "prisma",
        export: "prisma",
        module: path.join(
          __dirname,
          "..",
          "node_modules",
          ".prisma",
          "client",
          "index.d.ts"
        )
      }
    : {
        alias: "ctx",
        export: "ctx.Context",
        module: require.resolve("../api")
      },
  shouldGenerateArtifacts: process.env.NODE_ENV !== "production",
  outputs: {
    typegen: path.join(__dirname, "..", "nexus-typegen.ts"),
    schema: path.join(__dirname, "..", "schema.graphql")
  }
});

const jsonScalar = new GraphQLScalarType({
  ...JSONObjectResolver,
  name: "Json"
});
