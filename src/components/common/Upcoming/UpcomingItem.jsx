import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function UpcomingItem() {
  return (
    <div className="rounded-xl border border-[#9E8AA1]">
      <Image src="/assets/images/upcoming.jpg" width={300} height={297} className="rounded-xl" />
      <Link href="">
        <h2 className="text-base font-bold text-white">PEC Friends #1775</h2>
        <p className="font-medium text-[#9e9e9e]">Price</p>
      </Link>
    </div>
  );
}
