import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { BiBell, BiChevronDown } from 'react-icons/bi';
import useSuiWallet from '@hooks/useSuiWallet';
import { formatAddress } from '@services/frontend';

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
      <div className="flex flex-row gap-8 pt-1.5">
        <Link href="/explore" className="hover:text-yellow-400">
          Explore
        </Link>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="cursor-pointer hover:text-yellow-400 focus:text-yellow-400"
          >
            Launchpad <BiChevronDown className="ml-1 inline-block align-top text-2xl" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-2xl bg-[#252525] p-3">
            <li className="whitespace-nowrap">
              <Link href="/launchpad" className="hover:text-yellow-400">
                Launches
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link href="" className="hover:text-yellow-400">
                Apply to launchpad
              </Link>
            </li>
          </ul>
        </div>
      </div>
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
          <span className="rounded-full bg-[#252525] px-4 py-1 text-sm font-bold leading-7 text-white">
            {formatAddress(account)}
          </span>
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
