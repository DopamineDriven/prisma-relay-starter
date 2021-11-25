import { UserService } from "./user";
import { PrismaClient } from "@prisma/client";

export interface Services {
  user: UserService;
}

export function buildServices(prisma: PrismaClient) {
  return {
    user: new UserService(prisma)
    // blogPost: new BlogPostService(prisma)
  };
}
