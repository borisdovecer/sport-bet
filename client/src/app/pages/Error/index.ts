import Error from "./Error.tsx";
import { IPage } from "@app/global/interfaces.ts";

const errorEntity: IPage = {
  name: "Error",
  path: "*",
  element: Error,
  permissions: [],
  header: false,
};

export default errorEntity;
