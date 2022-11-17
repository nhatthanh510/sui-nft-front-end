import { SectionTitle } from '@components/common/';
import CategoryItem from './CategoryItem';

export default function Category() {
  return (
    <div className="mt-32">
      <SectionTitle title="Browse By Category" des="Explore the new creative economy" />
      <div className="grid grid-cols-4 gap-7">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}
