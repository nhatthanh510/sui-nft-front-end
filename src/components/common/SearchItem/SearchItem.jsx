import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchItem() {
  return (
    <span className="relative mx-auto block w-full max-w-md rounded-full border border-white py-1">
      <input
        type="text"
        placeholder="Type your keyword"
        className="relative z-10 h-10 w-full rounded-full border-none bg-transparent px-6 align-top text-[18px]  outline-none"
      />
      <button className="absolute top-3 right-4 z-20 text-2xl text-white">
        <BsSearch />
      </button>
    </span>
  );
}
