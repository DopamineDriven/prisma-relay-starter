import { GraphQLUpload, Upload } from "graphql-upload";
import { asNexusMethod } from "nexus";

export const UploadScalar = asNexusMethod(
  GraphQLUpload,
  "Upload",
  typeof new Upload()
);
