import _ from "lodash";
import Pages from "@app/pages";
import { logout } from "@app/store/userSlice.ts";
import { IPage } from "@app/global/interfaces.ts";
import { AppDispatch, RootState } from "@app/store";
import { IUserState } from "@app/store/interfaces.ts";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import { Link, Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";

/**
 * Header Component
 *
 * This component is used to render the navigation bar at the top of the application.
 * It contains links to different pages and handles user login/logout actions.
 */
const Header = () => {
  const location: Location = useLocation();
  const user: IUserState = useAppSelector((state: RootState) => state.user);
  const history: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.token = null;
    history("/login");
  };

  return (
    <div className="bg-gray-900 p-4 shadow-md shadow-gray-800">
      <div className="container mx-auto flex justify-between items-center text-gray-200">
        <div className="flex text-xl font-bold cursor-pointer capitalize">
          <img className="object-cover h-14 w-14 md:ml-24"
            src="/logo.png" alt="image"
          />
          <span className='my-auto ml-2'>Sport Bet</span>
        </div>
        <div className="flex space-x-4">
          {_.map(Pages, (page: IPage) => (
            page.header &&
              <Link key={page.name} to={page.path} className={`${page.path === location.pathname && "border-b-2 border-lime-600"} hover:text-gray-100`}>
                {page.name}
              </Link>
          ))}
          {user.token ?
            <button onClick={handleLogout}>Logout</button>
            :
            <Link to="/login"><button>Login</button></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
