import { SectionTitle } from '@components/common';
import UpcomingItem from './UpcomingItem';

export default function Launchpad() {
  return (
    <div className="mt-32">
      <SectionTitle title="Upcoming" des="Explore the new creative economy" />
      <div className="mt-16 grid grid-cols-4 gap-4">
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
      </div>
    </div>
  );
}
