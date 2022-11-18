import Image from 'next/image';
import Link from 'next/link';
import { CountdownItem } from '@components/common';

export default function NFTItem() {
  return (
    <div className="inline-block rounded-xl border border-[#9E8AA1]">
      <Link href="" className="relative">
        <Image
          src="/assets/images/upcoming.jpg"
          width={300}
          height={297}
          className="w-full rounded-xl"
        />
        <button className="btn-sm btn absolute bottom-0 right-0 z-10">Buy Now</button>
      </Link>
      <div className="p-4">
        <h2 className="text-base font-bold text-white">
          <Link href="">PEC Friends #1775</Link>
        </h2>
        <p className="mt-2 flex flex-row items-center justify-between">
          <span className="inline-block rounded-md bg-[#323232] px-2 py-1 text-sm">
            <Image
              src="/assets/images/currency.png"
              height={20}
              width={20}
              className="mr-2 inline-block rounded-full border-2 border-black align-top"
              alt="currency"
            />
            99
          </span>
        </p>
        <p className="mt-3 font-medium text-[#9e9e9e]">Ending</p>
        <div className=" flex flex-row items-center justify-between">
          <CountdownItem time={1669842887000} />
          <button>
            <Image src="/assets/images/add.png" height={27} width={27} alt="Buy" />
          </button>
        </div>
      </div>
    </div>
  );
}
