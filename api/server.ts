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


const prisma = new PrismaClient();

const server = new ApolloServer({
  allowBatchedHttpRequests: true,
  introspection: true,
  debug: true,
  schema,
  plugins: [ApolloServerPluginLandingPageDisabled()],
  context: () => {
    return buildServices(prisma);
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
