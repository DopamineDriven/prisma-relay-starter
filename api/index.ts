import { graphqlHTTP, RequestInfo, Options } from "express-graphql";
import { IncomingMessage, METHODS, ServerResponse } from "http";
import schema from "../schema";
import { buildServices } from "../services";
import { PrismaClient } from "@prisma/client";
import cors from "micro-cors";
import { RequestHandler } from "micro";
// export const corsMiddleware = (handler: RequestHandler) => {
//   return cors({
//     origin: "*",
//     allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
//     allowCredentials: true,
//     allowHeaders: [
//       "Origin",
//       "X-Requested-With",
//       "Content-Type",
//       "Accept",
//       "apollo-federation-include-trace",
//       "Authorization",
//       "Cache-Control",
//       "X-CSRF-Token",
//       "X-Forwarded",
//       "Content-Length",
//       "Content-MD5",
//       "Date",
//       "X-Api-Version"
//     ]
//   })(handler);
// };

export const prisma = new PrismaClient();

const allowCors =
  (fn: Function) =>
  async (req: IncomingMessage | RequestInfo, res: ServerResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another option
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
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
    ...buildServices(prisma)
  }
}));

export default allowCors(handler);
