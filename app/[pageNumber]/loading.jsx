import Image from "next/image";

const loading = () => {
  return (
    <main className="flex justify-center bg-white">
      <div className="bg-slate-100 shadow-2xl max-w-[1440px]">
        <div className="flex flex-wrap justify-center">
          <div className="flex m-5 bg-slate-200 rounded-lg">
            <div className="rounded-lg w-[300px] shadow-2xl p-4 bg ">
              <div className="flex justify-center mb-5 h-[400px]">
                <Image
                  src={`https://c4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-preview.jpg`}
                  alt="loading image"
                  width="300"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default loading;
