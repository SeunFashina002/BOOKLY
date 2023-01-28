import Carousel from "react-multi-carousel";
import { responsive } from "../components/Carousel";
import categories from "../../../data/category_data";


const Category = () => {
    return (
      <div className="gd-carousel-wrapper flex-col items-center justify-center py-24 md:flex md:flex-row sm:px-6 md:px-12 sm:py-12">
        <div className="flex flex-col w-full md:w-1/2 md:mr-12">
          <h2 className="text-4xl font-poppins font-bold py-4 sm:mb-4 md:mb-2">
            Category
          </h2>
          <p className="font-inter text-1xl mb-8">
            Bookly gives you the advantage of going for the books related to
            your specific field of interest by grouping all books into
            categories.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          removeArrowOnDeviceType={["mobile", 'tablet']}
          className="gd-carousel w-full"
        >
          {categories &&
            categories.map((category, index) => (
              <div key={index} className="relative flex flex-col rounded-lg text-center items-center justify-center bg-brown sm:w-11/12  sm:h-72 md:w-2/3 md:h-52">
                <img
                  src={category.coverImg}
                  alt={category.alt}
                  className="h-full w-full rounded-lg"
                />
                <p className="absolute bg-veryLightGray text-darkMoon font-inter font-bold px-1 mx-1 rounded-lg">
                  {category.title}
                </p>
              </div>
            ))}
        </Carousel>
      </div>
    );
};

export default Category;


    // <div className="flex flex items-center py-24 px-12">
    //   <div className="flex flex-col w-1/3 mr-12 py-4">
    //     <h2 className="text-4xl font-poppins font-bold ">Category</h2>
    //     <p className="font-nunito text-1xl">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Unde, quas.
    //     </p>
    //   </div>
    // </div>;