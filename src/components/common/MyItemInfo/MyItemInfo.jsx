import { formatAddress } from '@services/frontend';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';

export default function MyItemInfo() {
  return (
    <div className="flex flex-row gap-9 rounded-xl border border-[#dbdbdb] bg-[#030303] px-16 py-8">
      <div className="shrink-0 grow-0">
        <div className="flex h-[190px] w-[190px] flex-row items-center rounded-2xl border border-[#868686] bg-[#0f0f0f] ">
          <Image
            alt=""
            src="/assets/images/profile.png"
            width={71}
            height={92}
            className="mx-auto rounded-2xl"
          />
        </div>
        <p className="mt-4 flex flex-row justify-center gap-4 text-xl">
          <Link href="" className="collection-social">
            <AiOutlineTwitter />
          </Link>
          <Link href="" className="collection-social">
            <FaTelegramPlane />
          </Link>
          <Link href="" className="collection-social">
            <FaDiscord />
          </Link>
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold capitalize">{formatAddress('0x026c20a2f943f19f')}</h1>
        <p className="mt-2 text-base text-gray">
          The RetroBoys are a 2D NFT collection that will grant access to an immersive 3D experience
          in the Retroverse, the first Aptos Labs Metaverse.
        </p>
        <div className="mt-8 flex w-full flex-row justify-around rounded-2xl bg-[#0c0c0c] p-6 text-center">
          <div>
            <p className="text-base capitalize text-gray">Total Items</p>
            <p className="mt-2 text-[18px] font-bold uppercase text-white">1.8 APT</p>
          </div>
          <div>
            <p className="text-base capitalize text-gray">Listed Items</p>
            <p className="mt-2 text-[18px] font-bold uppercase text-white">1.8 APT</p>
          </div>
          <div>
            <p className="text-base capitalize text-gray">Total Volume</p>
            <p className="mt-2 text-[18px] font-bold uppercase text-white">1.8 APT</p>
          </div>
          <div>
            <p className="text-base capitalize text-gray">Estimated Value</p>
            <p className="mt-2 text-[18px] font-bold uppercase text-white">1.8 APT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
