import featured from "../../../data/featured_data";
import PaginatedItems from "./pagination/PaginateFeatured";
import { SearchBar } from "./SearchBar";

const Featured = () => {
    return (
      <div className="bg-veryLightGray md:pb-1 sm:px-6 md:px-12" id="featured">
        <div className="flex flex-col justify-between sm:pt-12  mt-12 md:pb-0 md:mt-24 md:flex-row md:items-center">
          <h2 className="font-bold text-4xl font-poppins  text-thinDark py-4 sm:mb-4 md:mb-2 sm:text-center md:text-left md:w-1/2">
            Featured
          </h2>

          <SearchBar />
        </div>

        <PaginatedItems label="Featured" data={featured} />
      </div>
    );
}

export default Featured


    
          
          

