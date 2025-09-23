import { z } from "zod";
import { 
  commonSchema, 
  spotlightSchema, 
  liteSchema, 
  immersionSchema, 
  iconSchema 
} from "./shared";

// Export the base types
export type CommonFields = z.infer<typeof commonSchema>;
export type SpotlightFields = z.infer<typeof spotlightSchema>;
export type LiteFields = z.infer<typeof liteSchema>;
export type ImmersionFields = z.infer<typeof immersionSchema>;
export type IconFields = z.infer<typeof iconSchema>;

// Export the schemas
export { 
  commonSchema, 
  spotlightSchema, 
  liteSchema, 
  immersionSchema, 
  iconSchema 
};

// Union type for all package schemas
export type PackageSchema = 
  | typeof spotlightSchema 
  | typeof liteSchema 
  | typeof immersionSchema 
  | typeof iconSchema;

// Union type for all package field types
export type PackageFields = 
  | SpotlightFields 
  | LiteFields 
  | ImmersionFields 
  | IconFields;
