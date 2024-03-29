import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  // displays the books as cards in the page and once clicked on it it takes you to a detailed page about the book you cliked on
  return (
          <Link
            href={`library/${props.id}`}
            target="_blank"
            className="flex m-5 bg-slate-200 rounded-lg w-[150px]  lg:w-[300px]"
          >
            <div className="rounded-lg shadow-2xl p-4 w-full">
              <div className="flex justify-center mb-5 h-[200px] lg:h-[400px]">
                <Image
                  src={`https://www.gutenberg.org/cache/epub/${props.id}/pg${props.id}.cover.medium.jpg`}
                  alt={`Cover of image`}
                  className="rounded-lg"
                  width="300"
                  height="400"
                />
              </div>
              <div className="mt-4 ">
                <h2 className="text-xl font-semibold text-center mb-5">
                  {props.title}
                </h2>
                <p className="text-gray-600 text-center mb-5">
                  Author: {props.auth}
                </p>
                <p className="text-gray-500 text-sm mt-2 text-center mb-5">
                  Languages: {props.lang}
                </p>
              </div>
            </div>
          </Link>
  )
}

export default Card