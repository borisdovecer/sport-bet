import _ from "lodash";
import Pages from "@app/pages";
import { Route, Routes } from "react-router-dom";
import { IPage } from "@app/global/interfaces.ts";

/**
 * Router Component
 *
 * This component is responsible for rendering the application's routes.
 * It dynamically generates routes based on the 'Pages' array.
 */
const Router = () => {
  const routes = _.map(Pages, (page: IPage) => {
    return <Route key={page.name} path={page.path} element={<page.element />} />;
  });

  return (
    <div className=''>
      <Routes>{routes}</Routes>
    </div>
  );
};

export default Router;
