import { AppRouter, Header } from "./";

/**
 * Layout Component
 *
 * This component serves as the layout template for the entire application.
 * It includes the Header component at the top and AppRouter component in the main content area.
 * The structure is defined by Flexbox to allow responsive and flexible layout design.
 *
 * @see AppRouter
 * @see Header
 */
const Layout = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 w-full">
          <AppRouter />
        </main>
      </div>
    </div>
  );
};

export default Layout;
