import { useState } from "react";

export const ThemeIcon = () => {

    let [icon, setIcon] = useState(false)

    const changeIcon = () => setIcon((prevState) => !prevState);
    let displayIcon = icon ? "sunny-outline" : "moon-outline";
    return (
      <button className="bg-lightGray hover:text-brown hover:bg-darkMoon flex flex items-center justify-center rounded-full font-bold text-darkMoon hover:text-lightBrown py-1 px-2 text-2xl" onClick={changeIcon}>
        <ion-icon name={displayIcon} className="font-bold"></ion-icon>
      </button>
    );
}