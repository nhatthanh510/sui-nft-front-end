import React from 'react';
import { Pagination } from '@components/common';
import CollectionItem from './CollectionItem';

export default function ListCollection({ data }) {
  return (
    <>
      <div className="mt-12 grid grid-cols-3 gap-8">
        {data.map((collection) => (
          <CollectionItem key={collection.id} collection={collection} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
