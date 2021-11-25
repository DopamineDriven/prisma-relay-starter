import { graphqlHTTP, RequestInfo, Options } from "express-graphql";
import { IncomingMessage, ServerResponse } from "http";
import { schema } from "../schema";
import { buildServices } from "../services";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allowCors =
  (fn: Function) =>
  async (req: RequestInfo | IncomingMessage, res: ServerResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another option
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (res.req.method === "OPTIONS") {
      res.writeHead(200).end();
      return;
    }
    return await fn(req, res);
  };

export const handler = graphqlHTTP((...props) => ({
  schema: schema,
  graphiql: true,
  pretty: true,
  context: {
    ...buildServices(global.prisma || prisma)
  }
}));

export default allowCors(handler);
