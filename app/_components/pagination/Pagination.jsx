import React from "react";
import Link from "next/link";

const Pagination = (props) => {
  return (
    <div className="flex justify-center my-5 py-5">
      <button
        className={`${
          props.previousAPI === null ? "hidden" : "block"
        } p-3 mx-3 rounded-lg text-lg bg-indigo-500 shadow-lg shadow-indigo-500/50`}
      >
        <Link href={`/${props.previousPage}`}>Previous</Link>
      </button>
      <div className="flex flex-col justify-center text-xl font-semibold ">
        <div>{props.pageNum}</div>
      </div>
      <button
        className={`${
          props.nextAPI === null ? "hidden" : "block"
        } p-3 mx-3 rounded-lg text-lg bg-cyan-500 shadow-lg shadow-cyan-500/50`}
      >
        <Link href={`/${props.nextPage}`}>Next</Link>
      </button>
    </div>
  );
};

export default Pagination;
