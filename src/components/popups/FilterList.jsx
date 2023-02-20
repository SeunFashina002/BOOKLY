export const FilterList = ({ isVisible }) => {

  const display = isVisible ? 'block' : 'none'

    
  return (
    <div style={{display: display}} className="bg-veryLightGray w-full md:w-1/2 rounded-md p-3 border-lightBrown border mb-6">
      <h4 className="font-bold font-inter text-md uppercase">Filter By</h4>
      <hr />
      <div className="my-4">
        <h2 className="font-bold font-sans text-md">Category</h2>
        <ul className="text-sm font-poppins">
          <li>Data Science</li>
          <li>Mobile Development</li>
          <li>Web Development</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
        </ul>
      </div>
      <hr />
      <div className="my-4">
        <h2 className="font-bold font-sans text-md">Some other stuff</h2>
        <ul className="text-sm font-poppins">
          <li>Item goes here</li>
          <li>Item goes here</li>
        </ul>
      </div>
    </div>
  );
};