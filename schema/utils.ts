import { core, inputObjectType, interfaceType } from "nexus";
import { NexusExtendInputTypeDef } from "nexus/dist/core";
import { OrderByEnum } from "./meta";

export function BuildOrderBy<T extends keyof core.GetGen<"rootTypes">>(
  model: T,
  fields: Array<keyof core.GetGen<"rootTypes">>
) {
  return interfaceType({
    name: `${model.toString()}Orderby`,
    definition(t) {
      for (const f of fields) {
        t.field(f as string, { type: OrderByEnum });
      }
    }
  });
}
