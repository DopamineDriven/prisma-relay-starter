import { arg, extendType, objectType, core, FieldResolver } from "nexus";
import { v4 } from "uuid";

export const ViewerQuery: core.NexusExtendTypeDef<"Query"> =
  extendType<"Query">({
    type: "Query",
    definition(t) {
      t.field("viewer", {
        type: "Viewer",
        args: {
          id: arg({
            type: "ID",
            default: v4()
          })
        },
        resolve(root, args, ctx, info) {
          return {
            id: "Viewer:" + String(args.id)
          };
        }
      });
    }
  });

export const Viewer: core.NexusObjectTypeDef<"Viewer"> = objectType({
  name: "Viewer",
  definition(t) {
    t.implements("Node");
    t.id("id");
  }
});
