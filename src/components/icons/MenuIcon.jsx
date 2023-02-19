import { useState } from "react";

export const MenuIcon = ({changeIcon, icon}) => {
    
  let displayIcon = icon ? "menu-outline" : "close-outline";

  return (
    <button
      className="font-bold text-deepBrown py-1 px-1 text-4xl sm:text-1xl sm:block md:hidden"
      onClick={changeIcon}
    >
      <ion-icon name={displayIcon}></ion-icon>
    </button>
  );
};
