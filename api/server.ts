import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import schema from "../schema";
import { buildServices } from "../services";
import { handler } from "./index";
import cors from "micro-cors";
import { RequestHandler } from "micro";

export const corsMiddleware = (handler: RequestHandler) => {
  return cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowCredentials: true,
    allowHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "apollo-federation-include-trace",
      "Authorization",
      "Cache-Control",
      "X-CSRF-Token",
      "X-Forwarded",
      "Content-Length",
      "Content-MD5",
      "Date",
      "X-Api-Version"
    ]
  })(handler);
};

const prisma = new PrismaClient();

const server = new ApolloServer({
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "apollo-federation-include-trace",
      "Authorization",
      "Cache-Control",
      "X-CSRF-Token",
      "X-Forwarded",
      "Content-Length",
      "Content-MD5",
      "Date",
      "X-Api-Version"
    ]
  },
  schema,
  context: () => {
    return buildServices(prisma);
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
