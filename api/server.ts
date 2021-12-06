import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import schema from "../schema";
import { buildServices } from "../services";
import { handler } from "./index";
import cors from "micro-cors";
import { RequestHandler } from "micro";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginInlineTrace
} from "apollo-server-core";
import { GraphQLSchema } from "graphql";
import { createContext } from "../context/index";
import { IncomingMessage, ServerResponse } from "http";

const prisma = new PrismaClient();

const server = new ApolloServer({
  allowBatchedHttpRequests: true,
  introspection: true,
  debug: true,
  schema: new GraphQLSchema(schema.toConfig()),
  context: (req: IncomingMessage, res: ServerResponse) => {
    return buildServices(prisma), prisma, req, res;
  }
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .then(() => server.getMiddleware({ path: "./index.ts" }));
