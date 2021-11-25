import { extendType, objectType, stringArg, connectionPlugin } from "nexus";
import { DatetimeScalar } from "./datetime-scalar";

export const UserQueryCore = extendType({
  type: "User",
  definition(t) {
    t.field("User", {
      type: "User",
      args: {
        id: stringArg({ default: "" })
      },
      resolve(_root, args, ctx) {
        return ctx.user.findUnique({ id: String(args?.id) });
      }
    });
  }
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.nullable.string("image");
    t.nullable.string("name");
    t.nullable.string("email");
    t.nullable.boolean("isAdmin");
    t.nullable.string("avatar");
  }
});
