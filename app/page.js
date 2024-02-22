import axios from "axios";

import Link from "next/link";
import Card from "./_components/card/Card";
import Pagination from "./_components/pagination/Pagination";

export default async function Home() {
  // data fetching using axios for the main page
  const response = await axios.get(`https://gutendex.com/books/?page=1`);

  // the data
  const data = response.data;

  // the next page api link provided py the api
  const nextAPI = response.data.next;

    // the previous page api link provided py the api
  const previousAPI = response.data.previous;

  // the number of books provided by the api
  const countAPI = response.data.count;

  // the number of pages for the entire project
  const numOfPagesAPI = Math.ceil(countAPI / 32);

  return (
    <main className="flex justify-center bg-white">
      <div className="bg-slate-100 shadow-2xl max-w-[1440px]">
      <div className="flex flex-wrap justify-center">
        {/* the data is being mapped into card component */}
        {data.results.map(
          (book, index) => (
            console.log("the data from action map", index, book),
            (
              <Card
                key={book.id}
                id={book.id}
                title={book.title}
                lang={book.languages}
                auth={book.authors.map((auth) => auth.name)}
              />
            )
          )
        )}
      </div>
            {/* calling the pagination component */}
      <Pagination
        nextAPI={nextAPI}
        previousAPI={previousAPI}
        previousPage={1}
        nextPage={2}
        pageNum={1}
      />
      </div>
    </main>
  );
}
