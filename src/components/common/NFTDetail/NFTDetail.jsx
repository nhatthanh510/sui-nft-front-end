import React from 'react';
import { formatAddress } from '@services/frontend';
import Image from 'next/image';
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import HIstoryItem from './HIstoryItem';

export default function NFTDetail() {
  return (
    <div className="flex flex-row gap-16">
      <div>
        <Image
          src="/assets/images/nft-detail.jpg"
          height={516}
          width={460}
          alt=""
          className="rounded-2xl"
        />
        <p className="mt-8 text-[18px] font-medium">Details</p>
        <p className="mt-5 flex flex-row items-center justify-between rounded-2xl bg-[#030303] p-4 text-xs text-gray">
          Creator Address{' '}
          <span className="text-sm font-bold text-secondary">
            {formatAddress('0xc2e477dd246bc567159a3c5f1c630a')}
          </span>
        </p>
        <p className="mt-5 flex flex-row items-center justify-between rounded-2xl bg-[#030303] p-4 text-xs text-gray">
          Transaction Fee
          <span className="text-sm font-bold text-secondary">2%</span>
        </p>
        <p className="mt-5 flex flex-row items-center justify-between rounded-2xl bg-[#030303] p-4 text-xs text-gray">
          Royalties Fee
          <span className="text-sm font-bold text-secondary">4%</span>
        </p>
        <p className="mt-5 flex flex-row items-center justify-between rounded-2xl bg-[#030303] p-4 text-xs text-gray">
          Listing/Bidding/Cancel
          <span className="text-sm font-bold text-secondary">Free</span>
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Retro Boys Club #2525</h1>
        <p className="mt-2 text-base text-gray">
          The RetroBoys are a 2D NFT collection that will grant access to an immersive 3D experience
          in the Retroverse, the first Aptos Labs Metaverse.
        </p>
        <div className="mt-4 flex flex-row items-center gap-2">
          <Link href="">
            <Image
              src="/assets/images/nft.png"
              alt=""
              height={42}
              width={42}
              className="rounded-full"
            />
          </Link>
          <div>
            <h2 className="text-[18px] font-bold">
              <Link href="">Puke 2 Earn</Link>
            </h2>
            <p className="text-sm text-gray">Creator</p>
          </div>
        </div>
        <p className="mt-10 text-sm text-gray">Current Price</p>
        <div className="mt-2 flex max-w-xl flex-row items-center gap-2 rounded-xl border border-secondary py-2 px-4">
          <span className="text-3xl font-bold text-secondary">3.92 APT</span>
          <span className="text-base text-gray">($250)</span>
        </div>
        <Tabs className="mt-14">
          <TabList className="tab-list">
            <Tab className="tab-title">History</Tab>
            <Tab className="tab-title">Offer</Tab>
          </TabList>
          <TabPanel>
            <HIstoryItem />
            <HIstoryItem />
            <HIstoryItem />
            <HIstoryItem />
          </TabPanel>
          <TabPanel>2</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
