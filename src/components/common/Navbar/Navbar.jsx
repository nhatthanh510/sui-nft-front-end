import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <span className="relative inline-block w-full max-w-xs rounded-full border border-white py-1">
      <input
        type="text"
        placeholder="Search NFTs, Collections"
        className="relative z-10 mt-0.5 w-full rounded-full border-none bg-transparent px-4 align-top text-sm  outline-none"
      />
      <BsSearch className="absolute top-1.5 right-3 z-0 text-xl text-white" />
    </span>
  );
};

const Navigation = () => {
  return (
    <div className="flex flex-row gap-10">
      <ul className="flex flex-row gap-8 pt-1.5">
        <li className="hover:text">
          <Link href="explore">Explore</Link>
        </li>
        <li className="hover:text">
          <Link href="explore">Launchpad</Link>
        </li>
      </ul>
      <div className="relative flex flex-row gap-7 pl-3">
        <span className="absolute top-2.5 left-0 block h-4 w-0.5 bg-white opacity-60" />
        <BiBell className="mt-1.5 text-2xl" />
        <button className="btn-sm btn">Connect Wallet</button>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="container mx-auto flex max-w-5xl flex-row justify-between pt-6">
      <SearchBar />
      <Navigation />
    </div>
  );
};

export default Navbar;
