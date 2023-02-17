import { NavLink, Outlet} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <nav className="bg-veryLightGray sticky top-0 z-20 border-b-2 border-lightBrown flex flex-row py-3 justify-between items-center text-navLinkBlack sm:px-6 md:px-12">
        <h1 className="text-2xl font-poppins flex flex items-center">
          <span className="mx-1  flex flex items-center">
            <ion-icon name="book-outline"></ion-icon>
          </span>
          <NavLink to="/">BOOKLY</NavLink>
        </h1>
        <ul className="hidden flex-row  justify-between space-x-12 items-center font-sans md:flex">
          <li className="hover:text-lightBrown">
            <NavLink to="/library">Library</NavLink>
          </li>
          <li className="hover:text-lightBrown">
            <NavHashLink smooth to="/#featured" >Featured </NavHashLink>
          </li>
          <li className="hover:text-lightBrown">
            <NavHashLink smooth to="/#categories">Category</NavHashLink>
          </li>
        </ul>

        <button className="hidden hover:bg-veryLightGray flex flex items-center justify-center hover:text-brown bg-lightGray rounded-full font-bold text-lightBrown hover:text-lightBrown py-1 px-2 text-2xl">
          <ion-icon
            className="hidden font-bold"
            name="sunny-outline"
          ></ion-icon>
        </button>

        <button className="bg-lightGray hover:text-brown hover:bg-darkMoon flex flex items-center justify-center rounded-full font-bold text-darkMoon hover:text-lightBrown py-1 px-2 text-2xl">
          <ion-icon name="moon-outline" className="font-bold"></ion-icon>
        </button>

        <div className="font-bold text-deepBrown py-1 px-1 text-4xl sm:text-1xl sm:block md:hidden ">
          <ion-icon name="menu-outline"></ion-icon>
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
