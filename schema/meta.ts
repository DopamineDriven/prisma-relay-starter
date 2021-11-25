import { enumType } from "nexus";

export const OrderByEnum = enumType({
  name: "OrderBy",
  members: ["ASC", "DESC"]
});
