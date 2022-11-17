import { CollectionInfo, NFTItemWithBuy } from '@components/common';

export default function CollectionDetailPage() {
  return (
    <div className="mt-5">
      <CollectionInfo />
      <div className="mt-16 grid grid-cols-4 gap-4">
        <NFTItemWithBuy />
      </div>
    </div>
  );
}
