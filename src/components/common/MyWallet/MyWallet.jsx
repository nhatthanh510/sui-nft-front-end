import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { NFTItemWithSell } from '../NFTItem';

export default function MyWallet() {
  return (
    <Tabs className="mt-24">
      <TabList className="tab-list">
        <Tab className="tab-title">On Wallet</Tab>
        <Tab className="tab-title">History</Tab>
      </TabList>
      <div className="mt-12">
        <TabPanel className="grid grid-cols-4 gap-4">
          <NFTItemWithSell />
          <NFTItemWithSell />
          <NFTItemWithSell />
          <NFTItemWithSell />
        </TabPanel>
        <TabPanel>2</TabPanel>
      </div>
    </Tabs>
  );
}
