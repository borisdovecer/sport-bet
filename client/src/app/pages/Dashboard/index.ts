import Dashboard from "./Dashboard.tsx";
import { IPage } from "@app/global/interfaces.ts";

const dashboardEntity: IPage = {
  name: "Dashboard",
  path: "/",
  element: Dashboard,
  permissions: [],
  header: true,
};

export default dashboardEntity;
