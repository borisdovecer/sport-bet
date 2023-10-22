import { Link } from "react-router-dom";

/**
 * ErrorPage Component
 *
 * This component is rendered when a user navigates to a route that does not exist in the application,
 * resulting in a 404 error. It provides a user-friendly interface to inform the user that the page they are
 * looking for cannot be found, and offers an option to navigate back to the home page.
 *
 * The component consists of a centered container with a dark background, displaying an error message and
 * an illustrative image, both placed side by side. It includes a "Return Home" button that uses React Router's
 * `Link` component to navigate the user back to the home page.
 *
 * @returns {JSX.Element} - A JSX element rendering a user-friendly 404 error page with an option to return to
 * the home page.
 */
const ErrorPage = () => {
  return (
    <div className=" flex justify-center text-white">
      <div className="bg-gray-800 p-8 mt-4 h-1/2 rounded-xl shadow-md flex space-x-6">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold mb-4">Error 404</h1>
          <p className="mb-4 text-md">Page doesn't exist</p>
          <Link to="/" className="inline-block bg-lime-500 text-gray-900 px-6 py-2 rounded-full text-md font-semibold transition hover:bg-lime-400">
            Return Home
          </Link>
        </div>
        <div className="flex-shrink-0">
          <img className="h-64 object-cover rounded-xl" src="/404.png" alt="Page Not Found" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
