import Image from 'next/image';
import Link from 'next/link';

export default function NFTItemWithSell() {
  return (
    <div className="inline-block rounded-2xl border border-[#9E8AA1]">
      <Link href="" className="relative">
        <Image
          src="/assets/images/upcoming.jpg"
          width={300}
          height={297}
          className="w-full rounded-2xl"
        />
        <button className="btn-error btn-sm btn absolute bottom-0 right-0 z-10">Sell Now</button>
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
      </div>
    </div>
  );
}
