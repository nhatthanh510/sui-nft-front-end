import React from 'react';
import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import CollectionItem from './CollectionItem';
import Slider from 'react-slick';

export default function Collections() {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
  };
  return (
    <div className="mt-32">
      <SectionTitle title="The latest collections" des="Explore the new creative economy" />
      <Slider {...settings} className="collections mt-7">
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
      </Slider>
    </div>
  );
}
