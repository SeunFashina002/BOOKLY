import BannerSlide from "../components/BannerSlide"
import Category from "../components/Category";
import Cta from "../components/Cta";
import Featured from "../components/Featured";

const Home = () => {
    return (
      <>
        <BannerSlide />
        <Category />
        <Featured/>
        <Cta/>
      </>
    );
}

export default Home