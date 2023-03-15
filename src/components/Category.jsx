import Carousel from "react-multi-carousel";
import { responsive } from "../components/Carousel";
import categories from "../../../data/category_data";


const Category = () => {
    return (
      <div id='categories' className="dark:bg-darkMoon gd-carousel-wrapper flex-col items-center justify-center py-24 md:flex md:flex-row sm:px-6 md:px-12">
        <div className="flex flex-col w-full md:w-1/2 md:mr-12">
          <h2 className="dark:text-lightGray text-4xl font-poppins  text-thinDark font-bold py-4 sm:mb-4 md:mb-2 sm:text-center md:text-left">
            Category
          </h2>
          <p className="dark:text-lightGray font-inter text-1xl text-darkMoon sm:mb-12 md:mb-8 sm:text-center md:text-left">
            Bookly gives you the advantage of going for the books related to
            your specific field of interest by grouping all books into
            categories.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          removeArrowOnDeviceType={["mobile", "tablet"]}
          className="gd-carousel w-full"
        >
          {categories &&
            categories.map((category, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-lg text-center items-center justify-center bg-brown sm:w-11/12  sm:h-72 md:w-2/3 md:h-52"
              >
                <img
                  src={category.coverImg}
                  alt={category.alt}
                  className="h-full w-full rounded-lg"
                />
                <p className="absolute bg-transparent text-darkMoon font-montserrat font-bold px-1 mx-1 rounded-lg">
                  {category.title}
                </p>
              </div>
            ))}
        </Carousel>
      </div>
    );
};

export default Category;
