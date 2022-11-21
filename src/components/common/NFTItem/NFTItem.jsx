import Image from 'next/image';
import Link from 'next/link';
import { CountdownItem } from '@components/common';

export default function NFTItem() {
  return (
    <div className="inline-block rounded-2xl border border-[#9E8AA1]">
      <Link href="">
        <Image
          alt=""
          src="/assets/images/upcoming.jpg"
          width={300}
          height={297}
          className="w-full rounded-2xl"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-base font-bold text-white">
          <Link href="">PEC Friends #1775</Link>
        </h2>
        <p className="mt-2 font-medium text-[#9e9e9e]">Price</p>
        <p className="mt-2">
          <span className="inline-block rounded-md bg-[#323232] px-2 py-1 text-sm">
            <Image
              alt=""
              src="/assets/images/currency.png"
              height={20}
              width={20}
              className="mr-2 inline-block rounded-full border-2 border-black align-top"
            />
            99
          </span>
        </p>
        <p className="mt-2 flex flex-row justify-between text-sm font-medium text-[#9e9e9e]">
          <span>5000 items</span>
          <CountdownItem time={1669842887000} />
        </p>
      </div>
    </div>
  );
}
