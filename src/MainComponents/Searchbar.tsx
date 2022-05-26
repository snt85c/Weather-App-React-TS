import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar(search: {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
}) {
  const [input, setInput] = useState<string | undefined>();

  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        search.setSearch(input);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });
  return (
    <div className="flex  items-center">
      <input
        placeholder="search"
        className="w-1/2 md:w-1/3 xl:w-1/4 xl:ml-10 m-4 pl-2 rounded text-black opacity-30 duration-300 focus:opacity-100"
        onChange={(e) => setInput(e.target.value)}
        onFocus={(e)=>{e.target.value= ""}}
      ></input>
      <FaSearch
        className="cursor-pointer"
        onClick={() => search.setSearch(input)}
      />
    </div>
  );
}
