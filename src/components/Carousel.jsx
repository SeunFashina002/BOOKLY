
import "react-multi-carousel/lib/styles.css"


export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 912 },
    items: 3.1,
  },
  tablet: {
    breakpoint: { max: 912, min: 464 },
    items: 1.2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.1,
  },
};
