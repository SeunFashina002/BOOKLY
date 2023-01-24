import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <nav className="bg-veryLightGray sticky top-0 z-20 border-b-2 border-lightBrown flex flex-row py-3 justify-between items-center text-navLinkBlack sm:px-6 md:px-12">
        <h1 className="text-2xl font-bold font-poppins flex flex items-center">
          <span className="mx-1  flex flex items-center">
            <ion-icon name="book-outline"></ion-icon>
          </span>
          BOOKLY
        </h1>
        <ul className="hidden flex-row  justify-between space-x-12 items-center font-bold font-inter md:flex">
          <li className="hover:text-lightBrown">Library</li>
          <li className="hover:text-lightBrown">Featured</li>
          <li className="hover:text-lightBrown">Categories</li>
        </ul>

        <button className="hover:bg-veryLightGray hover:text-brown bg-lightGray rounded-full font-bold text-lightBrown hover:text-lightBrown py-1 px-2 text-2xl">
          <ion-icon className="font-bold" name="sunny-outline"></ion-icon>
        </button>

        <button className="hidden hover:text-brown bg-darkMoon rounded-full font-bold text-lightBrown hover:text-lightBrown py-1 px-2 text-2xl">
          <ion-icon name="moon-outline" className="hidden"></ion-icon>
        </button>

        <div className="font-bold text-deepBrown py-1 px-1 text-4xl sm:text-1xl sm:block md:hidden ">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout