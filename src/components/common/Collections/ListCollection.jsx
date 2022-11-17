import React from 'react';
import { Pagination } from '@components/common';
import CollectionItem from './CollectionItem';

export default function ListCollection() {
  return (
    <>
      <div className="mt-12 grid grid-cols-3 gap-8">
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
      </div>
      <Pagination />
    </>
  );
}
