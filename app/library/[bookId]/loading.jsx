import Image from "next/image";

const loading = () => {
  return (
    <div className="bg-white flex justify-center h-screen">
      <div className="flex flex-col md:flex-row-reverse justify-between p-10 bg-slate-100 grow max-w-[1920px] md:my-32 rounded-lg  drop-shadow-2xl">
        <div className="flex justify-center drop-shadow-2xl w-1/2 rounded-lg ms-5">
          <Image
            src={`https://c4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-preview.jpg`}
            alt={`Cover of image`}
            className="rounded-lg"
            width={800}
            height={600}
          />
        </div>
        <div className="me-5 w-1/2">
          <h2 className="text-xl font-semibold text-center mb-5">Title:</h2>
          <p className="text-gray-600 text-center mb-5">Author:</p>
          <p className="text-gray-600 text-center mb-5">Born:</p>
          <p className="text-gray-600 text-center mb-5">Died:</p>
          <p className="text-gray-500 text-sm mt-2 text-center mb-5">
            Languages:
          </p>
          <p className="text-gray-500 text-sm text-center mb-5">Genre:</p>
          <p className="text-gray-500 text-sm text-center mb-5 text-wrap">
            Subject:
          </p>
          <p className="text-gray-500 text-sm text-center mb-5">Downloaded:</p>
        </div>
      </div>
    </div>
  );
};

export default loading;
