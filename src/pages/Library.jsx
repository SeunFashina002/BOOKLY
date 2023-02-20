import PaginatedItems from "../components/pagination/PaginateFeatured";
import books from "../../../data/books";
import { SearchBar } from "../components/SearchBar";
import { FilterIcon } from "../components/icons/FilterIcon";
import { useState } from "react";

export const Library = () => {
  let [isVisible, setIsVisible] = useState(false)
  
  const changeFilterBoardVisibility = () => {
    setIsVisible((prevState) => !prevState);
  }

    return (
      <section className="md:pb-1 sm:px-6 md:px-12">
        <div className="text-center">
          <h1 className="font-poppins text-6xl mb-6 sm:pt-12 md:pt-24">
            Library
          </h1>
          <p className="text-lg font-sans">
            This library gives you access to over 100 books that will definitely
            help you ace your programming skill in no time!
          </p>
        </div>

        <div className="flex flex-col-reverse sm:pt-12 mt-12 md:pb-0 md:mt-24 md:flex-row md:items-center">
          <h2 className="sm:hidden font-bold text-4xl font-poppins  text-thinDark py-4 sm:mb-4 md:mb-2 sm:text-center md:text-left md:block">
            Library
          </h2>

          <FilterIcon changeVisibility={changeFilterBoardVisibility} />

          <SearchBar />
        </div>

        <PaginatedItems
          label="Programming"
          data={books}
          isVisible={isVisible}
        />
      </section>
    );
}