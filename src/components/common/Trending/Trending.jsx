import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Trending() {
  return (
    <div className="mt-18 container mx-auto">
      <h1 className="mt-14 text-center text-6xl font-bold uppercase">DISCOVER RARE</h1>
      <h3 className="mt-4 text-center text-base font-medium">
        Explore the most outstanding NTFs in all topics of life. Buy NFTs <br />
        (or sell &rsquo;em) to earn rewards.
      </h3>
      <button className="btn mx-auto mt-6 block w-full max-w-[247px]">Start Trading</button>
      <h2 className="mt-8 text-center text-[40px] font-bold capitalize">Trending Collections</h2>
      <div
        className="bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./assets/images/discover.png')",
        }}
      >
        <div className="inline-block rounded-xl border border-white">
          <Link href="">
            <Image
              src="/assets/images/trending-collection.jpg"
              // width={331}
              // height={418}
              width={262}
              height={330}
              className="rounded-xl"
              alt=""
            />
          </Link>
          <h3 className="p-4 text-[18px] font-bold">
            <Link href="">PEC Friends #1775</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
