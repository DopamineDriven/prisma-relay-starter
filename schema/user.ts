import { extendType, objectType, stringArg, connectionPlugin } from "nexus";

export const UserQueryCore = extendType({
  type: "Viewer",
  definition(t) {
    t.field("User", {
      type: "User",
      args: {
        id: stringArg({ default: "" })
      },
      resolve(_root, args, ctx) {
        return ctx.user.findOne(args);
      }
    });
  }
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.implements("Node");
    t.string("id");
    t.nullable.string("image");
    t.nullable.string("name");
    t.nullable.string("email");
    t.nullable.string("emailVerified");
    t.nullable.boolean("isAdmin");
    t.nullable.string("avatar");
  }
});
