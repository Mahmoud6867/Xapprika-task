import React from "react";
import axios from "axios";
import Image from "next/image";



export const metadata = {
  title: "Book Detail",
};
const page = async ({ params }) => {

  // calling the api for one book by it's id provided by the params
  const response = await axios.get(
    `https://gutendex.com/books/?ids=${params.bookId}`
  );
  const data = response.data.results;
  console.log("The data from the dynamic route", params.bookId, data);

  return data.map(
    (book, index) => (
      console.log("the data from action map", index, book),
      (
        <div key={index} className="bg-white flex justify-center h-screen">
          <div className="flex flex-col md:flex-row-reverse justify-between p-10 bg-slate-100 grow max-w-[1920px] md:my-32 rounded-lg  drop-shadow-2xl">
            <div className="flex justify-center drop-shadow-2xl w-1/2 rounded-lg ms-5">
              <Image
                src={`https://www.gutenberg.org/cache/epub/${params.bookId}/pg${params.bookId}.cover.medium.jpg`}
                alt={`Cover of image`}
                className="rounded-lg"
                width={800}
                height={600}
              />
            </div>
            <div className="me-5 w-1/2">
              <h2 className="text-xl font-semibold text-center mb-5">
                Title: {book.title}
              </h2>
              <p className="text-gray-600 text-center mb-5">
                Author: {book.authors.map((auth) => auth.name)}
              </p>
              <p className="text-gray-600 text-center mb-5">
                Born: {book.authors.map((auth) => auth.birth_year)}
              </p>
              <p className="text-gray-600 text-center mb-5">
                Died: {book.authors.map((auth) => auth.death_year)}
              </p>
              <p className="text-gray-500 text-sm mt-2 text-center mb-5">
                Languages: {book.languages}
              </p>
              <p className="text-gray-500 text-sm text-center mb-5">
                Genre: {book.bookshelves}
              </p>
              <p className="text-gray-500 text-sm text-center mb-5 text-wrap">
                Subject: {book.subjects}
              </p>
              <p className="text-gray-500 text-sm text-center mb-5">
                Downloaded: {book.download_count}
              </p>
            </div>
          </div>
        </div>
      )
    )
  );
};

export default page;
