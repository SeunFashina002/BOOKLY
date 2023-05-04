import Carousel from "react-multi-carousel";
import { responsive } from "../components/Carousel";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/books-category/`)
      .then((response) => {
        setCategories(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      id="categories"
      className="dark:bg-darkMoon gd-carousel-wrapper flex-col items-center justify-center py-24 md:flex md:flex-row sm:px-6 md:px-12"
    >
      <div className="flex flex-col w-full md:w-1/2 md:mr-12">
        <h2 className="dark:text-lightGray text-4xl font-poppins  text-thinDark font-bold py-4 sm:mb-4 md:mb-2 sm:text-center md:text-left">
          Category
        </h2>
        <p className="dark:text-lightGray font-inter text-1xl text-darkMoon sm:mb-12 md:mb-8 sm:text-center md:text-left">
          Bookly gives you the advantage of going for the books related to your
          specific field of interest by grouping all books into categories.
        </p>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        className="gd-carousel w-full min-h-[300px]"
      >
        {loading
          ? Array.from(Array(4)).map((_, index) => (
              <Skeleton
                key={index}
                className="relative flex flex-col rounded-lg text-center items-center justify-center sm:w-11/12  sm:h-72 md:w-2/3 md:h-52"
              />
            ))
          : categories.map((category, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-lg text-center items-center justify-center bg-brown sm:w-11/12  sm:h-72 md:w-2/3 md:h-52"
              >
                <img
                  src={category.image}
                  alt={category.alt == "" ? "random books image" : category.alt}
                  className="h-full w-full rounded-lg"
                />
                <p className="absolute bg-transparent text-darkMoon font-montserrat font-bold px-1 mx-1 rounded-lg">
                  {category.name}
                </p>
              </div>
            ))}
      </Carousel>
    </div>
  );
};

export default Category;
