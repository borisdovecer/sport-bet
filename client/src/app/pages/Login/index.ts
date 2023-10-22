import Login from "./Login.tsx";
import { IPage } from "@app/global/interfaces.ts";

const loginEntity: IPage = {
  name: "Login",
  path: "/login",
  element: Login,
  permissions: [],
  header: false,
};

export default loginEntity;
