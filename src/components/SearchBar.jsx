export const SearchBar = () => {
    return (
      <div className="md:ml-auto border-black bg-veryLightBrown border-brown border rounded-full py-2 px-2 flex flex items-center md:w-1/2 sm:w-full xl:w-1/3 sm:mb-6 md:mb-0">
        <input
          type="text"
          className="w-full mx-1 px-2 bg-veryLightBrown border-0 border outline-0 outline  font-alegreya text-2xl placeholder-text-sans"
          placeholder="search book by name"
        />
        <button className="dark:text-brown dark:bg-thinDark flex flex items-center hover:bg-lightGray hover:text-whiteSmoke bg-veryLightGray rounded-full font-bold text-darkMoon hover:text-lightBrown py-1 px-2 text-2xl">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
    );
}