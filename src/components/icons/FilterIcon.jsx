export const FilterIcon = ({changeVisibility}) => {
  return (
    <div className="sm:text-right md:text-left">
      <button className="ml-12 text-3xl" onClick={changeVisibility}>
        <ion-icon name="filter"></ion-icon>
      </button>
    </div>
  );
};

