import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-veryLightGray">
      <div className="flex flex-col-reverse px-6 justify-between md:px-12 py-12 lg:flex lg:flex-row lg:items-center">
        <div className="">
          <h2 className="mt-6 text-center text-4xl font-bold font-alegreya mb-6 md:text-left md:mt-0">
            Developers
          </h2>

          <div className="flex flex-col md:flex md:flex-row items-center mb-2">
            <p className="text-lg font-inter">Oluwaseun Fashina</p>
            <div className="flex flex my-6 md:my-0">
              <button className="mx-2 text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
              <button className="text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="logo-linkedin"></ion-icon>
              </button>

              <button className="mx-2 text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="link-outline"></ion-icon>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex md:flex-row items-center text-center">
            <p className="mb-6 text-lg font-inter md:mr-9 md:mb-0">
              Atologun Kelvin
            </p>
            <div className="flex flex">
              <button className="mx-2 text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
              <button className="text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="logo-linkedin"></ion-icon>
              </button>

              <button className="mx-2 text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="link-outline"></ion-icon>
              </button>
            </div>
          </div>

          <h2 className="text-center mt-6 text-4xl font-bold font-alegreya mb-6 md:text-left">
            Desgined by
          </h2>

          <div className="flex flex-col md:flex md:flex-row items-center text-center">
            <p className="mb-6 text-lg font-inter md:mr-9 md:mb-0">
              Akolade Joseph
            </p>
            <div className="flex flex">
              <button className="mx-2 text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
              <button className="text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="logo-linkedin"></ion-icon>
              </button>

              <button className="mx-2 text-lg flex flex items-center bg-lightBrown p-1 rounded-full">
                <ion-icon name="link-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>

        <div className="py-6">
          <h2 className="mt-6 text-4xl font-bold font-alegreya mb-6 md:mt-0">
            Links
          </h2>
          <ul>
            <Link to="/library">Library</Link>
            <li className="my-6">
              <HashLink smooth to="/#featured">
                Featured
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#categories">
                Categories
              </HashLink>
            </li>
          </ul>
          <button className="font-poppins bg-lightBrown my-6 px-1 py-2 flex flex items-center justify-center text-lg rounded-lg">
            Follow BOOKLY
            <span className="flex flex items-center justify-center text-lg p-2 bg-veryLightGray rounded-full mx-2">
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
          </button>
        </div>

        <div className="w-full py-6 lg:w-1/3">
          <h2 className="text-2xl font-bold fonts-sans mb-6 md:text-3xl">
            Get updates on new books and features.
          </h2>
          <div className="flex flex space-x-3 w-full">
            <input
              type="text"
              className="flex-1 px-4 rounded-full focus:outline-none bg-veryLightBrown text-alegreya font-bold"
              placeholder="Enter your email here"
            />
            <button className="px-6 py-2 text-veryLightBrown rounded-full bg-thinDark hover:bg-brown hover:text-darkMoon focus:outline-none">
              Go
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <ion-icon name="eye-outline"></ion-icon>
<ion-icon name="book-outline"></ion-icon> */
}
