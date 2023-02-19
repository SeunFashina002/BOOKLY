import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const MobileMenu = ({icon}) => {
    let display = icon ?  'none' : 'flex'
    return (
        <ul style={{display: display}} className="hidden items-center font-sans text-lg md:text-sm sm:absolute sm:flex-col sm:drop-shadow-2xl sm:rounded-lg sm:bg-veryLightGray justify-center sm:top-24 sm:h-72 sm:w-full md:h-0 md:top-0 md:rounded-0 md:drop-shadow-none md:p-0 md:hidden md:space-x-12 md:relative">
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
    );
}