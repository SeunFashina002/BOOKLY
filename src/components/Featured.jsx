import featured from "../../data/featured_data";
import PaginatedItems from "./pagination/PaginateFeatured";
import { SearchBar } from "./SearchBar";

const Featured = () => {
    return (
      <div className="dark:bg-thinDark bg-veryLightGray md:pb-1" id="featured">
        <div className="flex flex-col justify-between sm:pt-12  pt-12 md:pb-0 md:pt-24 md:flex-row md:items-center sm:px-6 md:px-12">
          <h2 className="dark:text-lightGray font-bold text-4xl font-poppins  text-thinDark py-4 sm:mb-4 md:mb-2 sm:text-center md:text-left md:w-1/2">
            Featured
          </h2>

          <SearchBar />
        </div>

        <PaginatedItems label="Featured" data={featured} />
      </div>
    );
}

export default Featured


    
          
          

