import { core, idArg, interfaceType, queryField } from "nexus";
import { toGlobalId, fromGlobalId } from "graphql-relay";

// TypeName:ID -> base64

export const Node = interfaceType({
  name: "Node",
  resolveType(
    root
  ):
    | "Account"
    | "Entry"
    | "Session"
    | "Profile"
    | "User"
    | "Viewer"
    | "VerificationToken" {
    return "User" in root
      ? "User"
      : "Account" in root
      ? "Account"
      : "Session" in root
      ? "Session"
      : "Entry" in root
      ? "Entry"
      : "Profile" in root
      ? "Profile"
      : "Viewer" in root
      ? "Viewer"
      : "VerificationToken" in root
      ? "VerificationToken"
      : "Account" ||
        "Entry" ||
        "Session" ||
        "User" ||
        "Viewer" ||
        "Profile" ||
        "VerificationToken";
  },
  definition(t) {
    t.id("id", {
      resolve: (root, _args, _ctx, info) => {
        return toGlobalId(
          info.parentType.name,
          root?.id ? root.id.toString() : `${root.id}`
        );
      }
    });
    t.field("id", {
      type: "ID",
      resolve: root => {
        return root?.__typename
          ? root.__typename
          : `${root.__typename}:${root.id?.toString()}`;
      }
    });
  }
});

function assertAllTypesCovered(_x: never, id: string): never {
  throw new Error("could not find any resource with id: " + id);
}

export const NodeField = queryField(t => {
  t.field("node", {
    type: "Node",
    args: {
      id: idArg({ description: "Node id is of format: __typename:id" })
    },
    // @ts-ignore
    async resolve(_root, args, ctx, _info) {
      const { type } = fromGlobalId(String(args.id)) as {
        type: core.GetGen2<"abstractTypeMembers", "Node">;
        id: string;
      };

      if (type === "Viewer") {
        return { id: args.id, __typename: "Viewer" };
      }

      if (type === "Profile") {
        const profile = await ctx.prisma.profile.findUnique({
          where: { id: String(args.id) }
        });
        return { ...profile, __typename: type };
      }

      if (type === "VerificationToken") {
        const verificationToken = await ctx.prisma.verificationToken.findUnique(
          {
            where: { id: String(args.id) }
          }
        );
        return { ...verificationToken, __typename: type };
      }

      if (type === "Account") {
        const account = await ctx.prisma.account.findUnique({
          where: { id: String(args.id) }
        });
        return { ...account, __typename: type };
      }

      if (type === "Entry") {
        const entry = await ctx.prisma.entry.findUnique({
          where: { id: String(args.id) }
        });
        return { ...entry, __typename: type };
      }

      if (type === "Session") {
        const session = await ctx.prisma.session.findUnique({
          where: { id: String(args.id) }
        });
        return { ...session, __typename: type };
      }

      if (type === "User") {
        const user = await ctx.prisma.user.findUnique({
          where: { id: String(args.id) }
        });
        return { ...user, __typename: type };
      }

      return assertAllTypesCovered(type as unknown as never, String(args.id));
    }
  });
});
