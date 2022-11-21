import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import useSuiWallet from '@hooks/useSuiWallet';
import { formatAddress } from '@services/frontend';

const SearchBar = () => {
  return (
    <span className="relative inline-block w-full max-w-xs shrink-0 grow-0 rounded-full border border-white py-1">
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
        <Link href="/explore" className="hover:text-secondary">
          Explore
        </Link>
        <div className="dropdown">
          <label tabIndex={0} className="cursor-pointer hover:text-secondary focus:text-secondary">
            Launchpad <BiChevronDown className="ml-1 inline-block align-top text-2xl" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-2xl bg-[#252525] p-3">
            <li className="whitespace-nowrap">
              <Link href="/launchpad" className="hover:text-secondary">
                Launches
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link href="" className="hover:text-secondary">
                Apply to launchpad
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 flex flex-row gap-7 pl-3">
        <span className="absolute top-2.5 left-0 block h-4 w-0.5 bg-white opacity-60" />

        {!isActive ? (
          <button className="btn-sm btn" onClick={connect}>
            Connect Wallet
          </button>
        ) : (
          <div className="dropdown mt-1">
            <label
              tabIndex={0}
              className="cursor-pointer rounded-full bg-[#252525] px-4 py-2 text-sm font-bold text-white"
            >
              {formatAddress(account)}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box mt-2 flex w-full flex-col gap-2 bg-[#252525] py-2"
            >
              <li>
                <Link
                  href=""
                  className="px-4 py-1.5 text-center text-sm font-bold text-white hover:text-secondary"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="px-4 py-1.5 text-center text-sm font-bold text-white hover:text-secondary"
                >
                  My NFT
                </Link>
              </li>
              <li>
                <button className="px-4 py-1.5 text-center text-sm font-bold text-white hover:text-secondary">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Logo = () => {
  return <Link href="/">Logo</Link>;
};

const Navbar = () => {
  return (
    <div className="container mx-auto flex max-w-[1169px] flex-row justify-between pt-6">
      <div className="flex flex-row items-center gap-8">
        <Logo />
        <SearchBar />
      </div>
      <Navigation />
    </div>
  );
};

export default Navbar;
