import featured from "../../../data/featured_data";
import PaginatedItems from "./pagination/PaginateFeatured";

const Featured = () => {
    return (
      <div className="bg-veryLightGray">
        <div className="flex flex-col justify-between md:px-12 sm:px-6 sm:py-12 mt-12 md:pb-0 md:mt-24 md:flex-row md:items-center">
          <h2 className="font-bold text-4xl font-poppins  text-thinDark py-4 sm:mb-4 md:mb-2 sm:text-center md:text-left md:w-1/2">
            Featured
          </h2>

          <div className="border-black bg-veryLightBrown border-brown border rounded-full py-2 px-2 flex flex items-center md:w-1/2 sm:w-full xl:w-1/3">
            <input
              type="text"
              className="w-full mx-1 px-2 bg-veryLightBrown border-0 border outline-0 outline  font-alegreya text-2xl placeholder-text-sans"
              placeholder="search book by name"
            />
            <button className="flex flex items-center hover:bg-lightGray hover:text-whiteSmoke bg-veryLightGray rounded-full font-bold text-darkMoon hover:text-lightBrown py-1 px-2 text-2xl">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
        </div>

          <PaginatedItems data={featured} />        
          {/* <button className="hover:bg-veryLightBrown hover:text-thinDark bg-lightBrown z-10 text-darkMoon font-poppins outline-0 font-bold my-12 py-5 px-12 rounded-full sm:w-full md:w-4/5 sm:my-6 sm:mt-0 sm:mb-12 md:my-12">
            Go to Library
          </button> */}
        
      </div>
    );
}

export default Featured


    
          
          

