import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [words, setWords] = useState("");

  const onInputChange = (e) => {
    setWords(e.target.value);
    onSearch(e.target.value);
  };
  
  return (
    <div className="md:ml-auto bg-veryLightBrown border-brown border rounded-full py-2 px-2 flex items-center md:w-1/2 sm:w-full xl:w-1/3 sm:mb-6 md:mb-0">
      <input
        type="text"
        className="w-full mx-1 px-2 bg-veryLightBrown border-0  outline-0 outline  font-alegreya text-2xl placeholder-text-sans"
        placeholder="search book by name"
        onChange={(e) => onInputChange(e)}
        value={words}
      />
      <button className="dark:text-brown dark:bg-thinDark  flex items-center hover:bg-lightGray bg-veryLightGray rounded-full font-bold text-darkMoon hover:text-lightBrown py-1 px-2 text-2xl">
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
};
