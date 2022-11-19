import { CollectionInfo, NFTItemWithBuy, SideCart, Sort } from '@components/common';

export default function CollectionDetailPage() {
  return (
    <div className="mt-5">
      <CollectionInfo />
      <Sort />
      <div className="mt-12 flex flex-row gap-4">
        <div className="grid grid-cols-3 gap-4">
          <NFTItemWithBuy />
          <NFTItemWithBuy />
          <NFTItemWithBuy />
          <NFTItemWithBuy />
        </div>
        <SideCart />
      </div>
    </div>
  );
}
