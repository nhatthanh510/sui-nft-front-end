import { SearchItem, CategoryFilter, ListCollection } from '@components/common/';

export default function Home() {
  return (
    <div className="mt-28">
      <SearchItem />
      <CategoryFilter />
      <ListCollection />
    </div>
  );
}
