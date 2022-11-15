import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import useSuiWallet from '@hooks/useSuiWallet';

const SearchBar = () => {
  return (
    <span className="relative inline-block w-full max-w-xs rounded-full border border-white py-1">
      <input
        type="text"
        placeholder="Search NFTs, Collections"
        className="relative z-10 mt-0.5 w-full rounded-full border-none bg-transparent px-4 align-top text-sm  outline-none"
      />
      <button className="absolute top-1.5 right-3 z-20 text-xl text-white">
        <BsSearch />
      </button>
    </span>
  );
};

const Navigation = () => {
  const { connect, account, isActive, suiWallet } = useSuiWallet();
  console.log('account', account);
  console.log('suiWallet', suiWallet);
  return (
    <div className="flex flex-row gap-10">
      <ul className="flex flex-row gap-8 pt-1.5">
        <li className="hover:text">
          <Link href="explore" className="gradient-text">
            Explore
          </Link>
        </li>
        <li className="hover:text">
          <Link href="launchpad" className="gradient-text">
            Launchpad
          </Link>
        </li>
      </ul>
      <div className="relative flex flex-row gap-7 pl-3">
        <span className="absolute top-2.5 left-0 block h-4 w-0.5 bg-white opacity-60" />
        <Link href="">
          <BiBell className="mt-1.5 text-2xl" />
        </Link>
        {!isActive ? (
          <button className="btn-sm btn" onClick={connect}>
            Connect Wallet
          </button>
        ) : (
          <span>{account}</span>
        )}
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
