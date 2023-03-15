import { useState, useEffect } from "react";

export const ThemeIcon = () => {

  let [icon, setIcon] = useState(false)
  let [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    
  }

  const changeIcon = () => {
    setIcon((prevState) => !prevState);
    handleThemeSwitch()
  };

  let displayIcon = icon ? "moon-outline" : "sunny-outline";
  return (
    <button className="bg-lightGray dark:bg-darkMoon dark:text-brown hover:text-brown hover:bg-darkMoon flex flex items-center justify-center rounded-full font-bold text-darkMoon hover:text-lightBrown py-1 px-2 text-2xl" onClick={changeIcon}>
      <ion-icon name={displayIcon} className="font-bold"></ion-icon>
    </button>
  );
}