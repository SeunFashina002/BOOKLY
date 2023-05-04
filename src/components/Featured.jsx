import { useState, useEffect } from "react";
import PaginatedItems from "./pagination/PaginateFeatured";
import { SearchBar } from "./SearchBar";
import axios from 'axios'
import { BASE_URL } from "../constants";

const Featured = () => {
  const [featured, setFeatured] = useState([])
  const [query, setQuery] = useState('')
  const [isloading, setIsLoading] = useState(true)

  const handleSearch = (query) => (
    setQuery(query)
  )
  
  useEffect(() => {
    // console.log(query);
    
    axios
      .get(`${BASE_URL}/api/v1/featured-books/?search=${query}`)
      .then((response) => {
        setFeatured(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [query])

    return (
      <div className="dark:bg-thinDark bg-veryLightGray md:pb-1" id="featured">
        <div className="flex flex-col justify-between sm:pt-12  pt-12 md:pb-0 md:pt-24 md:flex-row md:items-center sm:px-6 md:px-12">
          <h2 className="dark:text-lightGray font-bold text-4xl font-poppins  text-thinDark py-4 sm:mb-4 md:mb-2 sm:text-center md:text-left md:w-1/2">
            Featured
          </h2>

          <SearchBar onSearch={handleSearch} />
        </div>

        <PaginatedItems label="Featured" data={featured} loading={isloading}/>
      </div>
    );
}

export default Featured


    
          
          

