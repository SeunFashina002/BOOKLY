import { NavLink, Outlet} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Footer from "../components/Footer";
import { ThemeIcon } from "../components/icons/ThemeIcon";
import { MenuIcon } from "../components/icons/MenuIcon";
import { MobileMenu } from "../components/popups/MobileMenu";
import { useState } from "react";

const RootLayout = () => {

  let [icon, setIcon] = useState(true);

  const changeIcon = () => {
    setIcon((prevIcon) => !prevIcon);
  };

  return (
    <>
      <nav className="z-20 sm:px-2 md:px-12  py-3 bg-veryLightGray border-b-2 border-lightBrown sticky top-0 z-20">
        <div className="relative  flex flex-row justify-between items-center text-navLinkBlack w-full">
          <h1 className="text-2xl font-poppins flex flex items-center">
            <span className="mx-1  flex flex items-center">
              <ion-icon name="book-outline"></ion-icon>
            </span>
            <NavLink to="/">BOOKLY</NavLink>
          </h1>
          <ul className="hidden  items-center font-sans text-lg md:text-sm sm:absolute  sm:drop-shadow-2xl sm:rounded-lg sm:bg-veryLightGray justify-center sm:top-24 sm:h-72 sm:w-full md:h-0 md:top-0 md:rounded-0 md:drop-shadow-none md:p-0 md:flex md:flex-row md:space-x-12 md:relative">
            <li className="hover:text-lightBrown">
              <NavLink to="/library">Library</NavLink>
            </li>
            <li className="hover:text-lightBrown sm:my-6 md:my-0">
              <NavHashLink smooth to="/#featured">
                Featured
              </NavHashLink>
            </li>
            <li className="hover:text-lightBrown">
              <NavHashLink smooth to="/#categories">
                Category
              </NavHashLink>
            </li>
          </ul>

          <MobileMenu icon={icon} />

          <ThemeIcon />

          <MenuIcon icon={icon} changeIcon={changeIcon} />
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
