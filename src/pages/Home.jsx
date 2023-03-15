import BannerSlide from "../components/BannerSlide";
import Category from "../components/Category";
import Cta from "../components/Cta";
import Featured from "../components/Featured";


const Home = () => {

  return (
    <>
      <BannerSlide />
      <Category />
      <Featured />
      <Cta
        actionText="Ace your programming skill today!"
        buttonText="Go to library"
        url="library/#"
      />
    </>
  );
};

export default Home;
