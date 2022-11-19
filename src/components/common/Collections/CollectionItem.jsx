import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CollectionItem({ collection }) {
  return (
    <div className="collection">
      <Link href={`/collection/${collection?.id}`} className="group relative">
        <div className="relative z-10 grid grid-cols-2 border border-white p-9">
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full p-2">
            <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-50 " />
            <div className="absolute top-0 left-0 z-20 h-full w-full rounded-full border-[8px] border-white opacity-80  " />
            <Image src="/assets/images/nft.png" width={110} height={110} alt="" />
            <h3 className="absolute top-1/2 left-1/2 z-30 w-full max-w-[80px] -translate-x-1/2 -translate-y-1/2 whitespace-normal text-center text-[18px] font-bold capitalize leading-6">
              {collection?.name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
