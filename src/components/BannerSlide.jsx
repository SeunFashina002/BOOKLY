import { Link } from "react-router-dom";

const BannerSlide = () => {
    return (
      <div id="home" className="hero-banner-img relative flex flex-col justify-center items-center md:px-12">
        <div className="absolute  flex flex-col justify-center text-center items-center w-full sm:px-3">
          <h1 className="z-10 text-white font-bold font-montserrat  sm:text-4xl md:text-6xl">
            Free books about your favorite programming languages across the
            internet, all in one place!
          </h1>
          <Link to='/library' className="hover:bg-thinDark hover:text-lightBrown bg-veryLightBrown z-10 text-darkMoon font-poppins outline-0 font-bold my-12 py-5 px-12 rounded-full sm:w-2/3 sm:mx-3 md:w-1/3">
            Go to Library
          </Link>
        </div>
      </div>
    );
}

export default BannerSlide