import { core, inputObjectType } from "nexus";
import { OrderByEnum } from "./meta";

export function BuildOrderBy<T extends keyof core.GetGen<"rootTypes">>(
  model: T,
  fields: Array<keyof core.GetGen<"rootTypes">>
) {
  return inputObjectType({
    name: `${model}Orderby`,
    definition(t) {
      for (const f of fields) {
        t.field(f as string, { type: OrderByEnum });
      }
    }
  });
}
