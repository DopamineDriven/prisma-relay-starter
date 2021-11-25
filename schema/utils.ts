import { core, inputObjectType } from "nexus";
import { OrderByEnum } from "./meta";

export function buildOrderBy<M extends keyof core.GetGen<"rootTypes">>(
  model: M,
  fields: Array<keyof core.GetGen<"rootTypes">[M]>
) {
  return inputObjectType<`${M}OrderBy`>({
    name: `${model}OrderBy`,
    definition(t) {
      for (const f of fields) {
        t.field(f as string, { type: OrderByEnum });
      }
    }
  });
}
