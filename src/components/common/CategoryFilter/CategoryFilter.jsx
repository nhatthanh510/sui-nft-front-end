import Link from 'next/link';
import React from 'react';

export default function CategoryFilter() {
  return (
    <ul className="category-filter">
      <li>
        <Link href="" className="active">
          All Collections
        </Link>
      </li>
      <li>
        <Link href="">Art</Link>
      </li>
      <li>
        <Link href="">Game</Link>
      </li>
      <li>
        <Link href="">Photograph</Link>
      </li>
    </ul>
  );
}
