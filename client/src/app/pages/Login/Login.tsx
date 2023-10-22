import { AppDispatch } from "@app/store";
import { setUser } from "@app/store/userSlice.ts";
import { loginUser } from "@app/services/auth.ts";
import { useAppDispatch } from "@app/store/hooks.ts";
import { ChangeEvent, FormEvent, useState } from "react";
import { ILoginResponse } from "@app/global/interfaces.ts";
import { NavigateFunction, useNavigate } from "react-router-dom";

/**
 * Login Component
 *
 * This component handles the user login functionality. It consists of a form that captures the user's
 * username and password and submits this information for authentication. Upon successful authentication,
 * the user is redirected to the homepage, and the user's token and username are stored in the local storage
 * and the application's state, respectively.
 *
 * The component uses useState hooks to manage local state variables for the username, password, and any
 * potential error messages. The useNavigate hook from React Router is used to redirect the user upon
 * successful login.
 *
 * The component also uses the useAppDispatch hook to dispatch actions to the Redux store, specifically
 * the setUser action to update the application's state with the authenticated user's information.
 *
 * Error handling is in place to catch any issues with the authentication process, such as incorrect
 * credentials, and display an error message to the user.
 *
 * @returns {JSX.Element} - A JSX element that renders the login form and handles the authentication process.
 */
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response: ILoginResponse = await loginUser(username, password);
      dispatch(setUser({ username: response.username, token: response.token }));
      localStorage.token = response.token;
      history("/");
    } catch (err: any) {
      setError(err.response.data || "Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
              Sign in
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
