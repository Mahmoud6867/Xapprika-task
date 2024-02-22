import Link from "next/link";
import axios from "axios";
import Card from "../_components/card/Card";
import Pagination from "../_components/pagination/Pagination";

const page = async ({ params }) => {
  // data fetching using axios for the pagination of the pages where every page is a dunamyc route
  const response = await axios.get(
    `https://gutendex.com/books/?page=${params.pageNumber}`
  );
  const data = response.data;
  const nextAPI = response.data.next;
  const previousAPI = response.data.previous;
  const countAPI = response.data.count;
  const numOfPagesAPI = Math.ceil(countAPI / 32);
  const pageNumber = parseInt(params.pageNumber);
  const nextPage = pageNumber + 1;
  const previousPage = pageNumber - 1;
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
        previousPage={previousPage}
        nextPage={nextPage}
        pageNum={pageNumber}
      />
    </main>
  );
};

export default page;
