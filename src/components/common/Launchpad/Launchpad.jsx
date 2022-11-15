import Image from 'next/image';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Launchpad() {
  return (
    <div className="mt-48 flex flex-row gap-28">
      <div className="relative shrink-0 grow-0 pt-11">
        <div className=" bg-gradient absolute top-0 left-8 w-full rounded-2xl pt-[100%]" />
        <Image
          src="/assets/images/launchpad.jpg"
          width={633}
          height={633}
          className="relative z-10 rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full">
        <h2 className="text-[40px] font-bold">Launchpad</h2>
        <Tabs className="mt-14">
          <TabList className="tab-list">
            <Tab className="tab-title">Whitelist</Tab>
            <Tab className="tab-title">Public</Tab>
          </TabList>
          <TabPanel>
            <h2 className="mt-8 text-2xl font-bold">F1 Dog</h2>
            <div className="mt-5 flex w-full flex-row items-center gap-5">
              <Link href="">
                <Image src="/assets/images/nft.png" width={68} height={68} alt="" />
              </Link>
              <div>
                <h3 className="text-[18px] font-bold capitalize">
                  <Link href="" className=" gradient-text">
                    Puke 2 Earn
                  </Link>
                </h3>
                <h4 className="mt-1 text-base capitalize text-gray">
                  <Link href="" className="gradient-text">
                    Creator
                  </Link>
                </h4>
              </div>
            </div>
            <p className="mt-5 text-base">
              F1 Dog is an NFT Race-to-earn game on Aptos, Sui Blockchain. It was created to
              digitize the traditional greyhound racing industry. Players can own, train dogs,
              breed, use them to participate in races and earn money easily.
            </p>
            <button className="btn mt-12 min-w-[247px]">Go to launchpad</button>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
