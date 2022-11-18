import { SearchItem, CategoryFilter, ListCollection } from '@components/common/';

export default function ExplorePage({ collections }) {
  return (
    <div className="mt-28">
      <SearchItem />
      <CategoryFilter />
      <ListCollection data={collections} />
    </div>
  );
}
