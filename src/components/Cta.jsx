import { Link } from "react-router-dom";

const Cta = () => {
    return (
      <section className="bg-brown">
        <div className="flex flex-col items-center px-6 justify-between md:flex-row sm:mx-auto md:mx-0 sm:text-center md:text-left md:px-12 py-12">
          <h2 className="font-bold text-whiteSmoke font-poppins sm:w-full md:w-1/2 sm:text-3xl md:text-5xl">
            Ace your programming skill today!
          </h2>
          <Link to='/library' className="hover:bg-thinDark hover:text-lightBrown bg-veryLightBrown z-10 text-darkMoon font-poppins outline-0 font-bold my-12 py-5 px-12 rounded-full sm:w-full md:w-1/3 text-center">
            Go to Library
          </Link>
        </div>
      </section>
    );
}

export default Cta