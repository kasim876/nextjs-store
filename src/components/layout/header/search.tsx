import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

export default function Search() {
  return (
    <form
      action=""
      className="w-full relative max-w-[500px] lg:w-80 xl:w-full"
    >
      <input
        type="text"
        name="search"
        placeholder="Search for products..."
        className="w-full pl-4 pr-8 py-2 rounded-lg border-primary bg-white dark:bg-transparent text-sm text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-4 top-0 flex items-center h-full">
        <MagnifyingGlassIcon className="w-4 h-4" />
      </div>
    </form>
  );
  ``;
}
