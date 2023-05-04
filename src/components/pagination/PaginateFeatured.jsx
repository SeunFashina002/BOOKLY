import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FilterList } from "../popups/FilterList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function PaginatedItems({ data, label, isVisible, loading}) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="sm:px-6 md:px-12">
        <FilterList isVisible={isVisible} />
      </div>

      <div className="flex flex-col justify-center items-center h-full sm:px-6 md:px-12">
        <div className="mx-auto gap-4 md:gap-10 md:mb-12 md:my-12 md:pt-0 sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full ">
          {loading
            ? Array.from(Array(6)).map((_, index) => (
                <Skeleton
                  key={index}
                  className="relative flex flex-col rounded-lg bg-white border shadow-2xl h-80 md:h-96 max-h-full w-full"
                />
              ))
            : currentItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col rounded-lg bg-white border-brown border shadow-2xl h-80 md:h-96 max-h-full w-full"
                >
                  <img
                    className="rounded-t-lg h-60 md:h-72"
                    src={item.cover_image || <Skeleton />}
                    alt={item.alt}
                  />
                  <div className="dark:bg-darkMoon px-3 py-1 bg-thinDark rounded-b-lg h-20 md:h-24">
                    <h5 className="dark:text-veryLightGray text-veryLightGray font-medium font-inter mb-2 text-sm md:text-lg">
                      {item.title || <Skeleton />}
                    </h5>
                    <p className="dark:text-lightGray text-lightGray text-xs text-alegreya mb-4">
                      {item.author || <Skeleton />}
                    </p>

                    <div className="flex flex-row flex-wrap">
                      {item.tags?.map((tag, index) => (
                        <p
                          key={index}
                          className="p-2 bg-gray text-whiteSmoke rounded-full mr-2 my-1 text-sm"
                        >
                          {tag || <Skeleton />}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p className="absolute bg-deepBrown text-thinDark font-bold font-montserrat w-36 px-3 py-1 rounded-br-full top-0 left-0">
                    {label || <Skeleton />}
                  </p>
                  <a
                    href={item.book_url}
                    className="flex flex-col items-center justify-center hover:bg-transparent hover:text-thinDark hover:border-darkMoon hover:border absolute inset-x-0 inset-y-0 h-8 w-1/3 my-auto mx-auto bg-veryLightBrown text-darkMoon border-lightBrown text-center border font-bold rounded-full"
                  >
                    view book
                  </a>
                </div>
              ))}
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

