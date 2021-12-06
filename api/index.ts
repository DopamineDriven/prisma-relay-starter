import { graphqlHTTP, RequestInfo, Options } from "express-graphql";
import { IncomingMessage, METHODS, ServerResponse } from "http";
import schema from "../schema";
import { buildServices } from "../services";
import { PrismaClient } from "@prisma/client";
import cors from "micro-cors";
import { RequestHandler } from "micro";
import { createContext } from "../context/index";
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
    res.setHeader(
      "Cache-Control",
      "public, stale-while-revalidate=600, s-maxage=1200"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, apollo-federation-include-trace, Authorization"
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
    createContext: {
      buildServices: buildServices(prisma),
      prisma
    }
  },
  ...props
}));

export default allowCors(handler);
