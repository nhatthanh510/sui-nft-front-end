import React from 'react';
import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import CollectionItem from './CollectionItem';

export default function Collections() {
  return (
    <div className="container mx-auto mt-32">
      <SectionTitle title="The latest collections" des="Explore the new creative economy" />
      <div className="mt-8 flex flex-row gap-8 ">
        <CollectionItem />
      </div>
    </div>
  );
}
