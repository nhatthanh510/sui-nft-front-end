import React from 'react';
import { SectionTitle } from '@components/common';
import CollectionItem from './CollectionItem';

export default function Collections() {
  return (
    <div className="mt-32">
      <SectionTitle title="The latest collections" des="Explore the new creative economy" />
      <div className="collections mt-7 gap-8 overflow-x-auto ">
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
      </div>
    </div>
  );
}
