import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TrendingItem() {
  return (
    <div className="relative rounded-xl border border-white ">
      <Image
        src="/assets/images/trending-collection.jpg"
        width={331}
        height={418}
        className="rounded-xl "
        alt=""
      />
      <h3 className="p-4 text-[18px] font-bold">
        <Link href="" className="gradient-text">
          PEC Friends #1775
        </Link>
      </h3>
    </div>
  );
}
