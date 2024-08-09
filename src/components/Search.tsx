import React from "react";
import { Input } from "@/components/ui/input";



import Image from 'next/image';


function Search() {
  return (
    <div className="flex border border-white justify-around px-2 rounded-lg w-[400px] ">
      <Input type="search" placeholder="Search" className="w-full border-none outline-none  bg-gray-700 " />
      <Image src='/search.svg' alt="search" width={30} height={30} />
    </div>
  );
}

export default Search;

