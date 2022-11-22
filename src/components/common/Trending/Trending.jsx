import React from 'react';
import Slider from 'react-slick';
import TrendingItem from './TrendingItem';

export default function Trending() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    arrows: false,
    dots: true,
    centerPadding: '350px',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    focusOnSelect: true,
  };
  return (
    <div className="mt-18">
      <h1 className="mt-14 text-center text-6xl font-bold uppercase">DISCOVER RARE</h1>
      <h3 className="mt-4 text-center text-base font-medium">
        Explore the most outstanding NTFs in all topics of life. Buy NFTs <br />
        (or sell &rsquo;em) to earn rewards.
      </h3>
      <button className="btn mx-auto mt-6 block w-full max-w-[247px]">Start Trading</button>
      <h2 className="mt-8 text-center text-[40px] font-bold capitalize">Trending Collections</h2>
      <div
        className="bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./assets/images/discover.png')",
        }}
      >
        <Slider {...settings} className="trending">
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
        </Slider>
      </div>
    </div>
  );
}
