import React from "react";
import Link from "next/link";

const Pagination = (props) => {
  // in this component the we use the props based to it by th parent component
  // previousPage & nextPage are used to transport between pages using the dynamic route [pageNumber]
  // previousAPI & nextAPI are provided by the api to indicate the previous and next pages and if any one of them is null it hides it's button
  return (
    <div className="flex justify-center my-5 py-5">
      <button
        className={`${
          props.previousAPI === null ? "hidden" : "block"
        } py-2 mx-3 rounded-lg text-lg bg-indigo-500 shadow-lg shadow-indigo-500/50`}
      >
        <Link className="p-2 rounded-lg" href={`/${props.previousPage}`}>
          Previous
        </Link>
      </button>
      <div className="flex flex-col justify-center text-xl font-semibold ">
        <div>{props.pageNum}</div>
      </div>
      <button
        className={`${
          props.nextAPI === null ? "hidden" : "block"
        }  py-2 mx-3 rounded-lg text-lg bg-cyan-500 shadow-lg shadow-cyan-500/50`}
      >
        <Link className="p-2 rounded-lg" href={`/${props.nextPage}`}>
          Next
        </Link>
      </button>
    </div>
  );
};

export default Pagination;
