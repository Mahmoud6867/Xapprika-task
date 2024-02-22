import axios from "axios";

import Link from "next/link";
import Card from "./_components/card/Card";
import Pagination from "./_components/pagination/Pagination";

export default async function Home() {
  // data fetching using axios for the main page
  const response = await axios.get(`https://gutendex.com/books/?page=1`);
  const data = response.data;
  const nextAPI = response.data.next;
  const previousAPI = response.data.previous;
  const countAPI = response.data.count;
  const numOfPagesAPI = Math.ceil(countAPI / 32);

  return (
    <main className="flex flex-col  bg-white">
      <div className="flex flex-wrap justify-center">
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
      <Pagination
        nextAPI={nextAPI}
        previousAPI={previousAPI}
        previousPage={1}
        nextPage={2}
        pageNum={1}
      />
    </main>
  );
}
