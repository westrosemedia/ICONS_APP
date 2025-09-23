import { PACKAGES as BASE } from "./packages";
import { FLAGS } from "@/lib/flags";

export const PACKAGES = BASE.filter(p => {
  if (p.id === "vip-day") return FLAGS.vipDay;
  return true;
});
