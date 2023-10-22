import { useEffect } from "react";
import { Layout } from "@app/layout";
import { AppDispatch } from "@app/store";
import { setUser } from "@app/store/userSlice.ts";
import { useAppDispatch } from "@app/store/hooks.ts";

/**
 * App Component
 *
 * This is the main component of the application. It checks if the user token is
 * stored in localStorage upon initialization, and if it is, it dispatches an action
 * to update the user state in the Redux store. It then renders the Layout component,
 * which contains the structure and routing of the application.
 *
 * @see Layout
 */
const App = () => {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.token) {
      dispatch(setUser({ username: "admin", token: localStorage.token }));
    }
  },[]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-950 to-gray-900'>
      <Layout />
    </div>
  );
};

export default App;
