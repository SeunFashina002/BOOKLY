const RootLayout = () => {
    return (
      <nav className="sticky top-0 border-b-2 border-veryLightGray flex flex-row py-3 justify-between items-center text-navLinkBlack sm:px-6 md:px-12">
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

        <button className="hover:bg-darkMoon bg-veryLightGray rounded-full font-bold text-darkMoon hover:text-lightBrown py-1 px-2 sm:text-1xl md:text-2xl">
          <ion-icon className="font-bold" name="moon-outline"></ion-icon>
          {/* <ion-icon name="sunny-outline" className='hidden'></ion-icon> */}
        </button>

        <div className="font-bold text-deepBrown py-1 px-1 text-4xl sm:text-1xl sm:block md:hidden ">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </nav>
    );
}

export default RootLayout