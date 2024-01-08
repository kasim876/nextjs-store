export default function Loading() {
  return (
    <div className="px-4">
      <div className="shimmer relative overflow-hidden max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 rounded-lg border-primary p-8 lg:p-12 bg-white dark:bg-black">
          <div className="basis-full lg:basis-2/3">
            <div className="rounded-lg bg-gray-200 aspect-square w-full h-full max-h-[550px]"></div>
            <div className="flex items-center justify-center gap-2 my-12 lg:mb-0">
              <div className="bg-gray-200 w-20 h-20 border-primary rounded-lg"></div>
              <div className="bg-gray-200 w-20 h-20 border-primary rounded-lg"></div>
              <div className="bg-gray-200 w-20 h-20 border-primary rounded-lg"></div>
            </div>
          </div>
          <div className="basis-full lg:basis-1/3">
            <div className="mb-6 pb-6 border-b-primary">
              <div className="w-full h-12 mb-2 bg-gray-200 rounded-lg"></div>
              <div className="w-28 h-10 bg-blue-600 rounded-full"></div>
            </div>
            <div className="relative rounded-full w-full p-4 bg-blue-600 text-white text-center">
              <span className="absolute left-0 top-0 flex items-center h-full ml-4 text-3xl">+</span>
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
