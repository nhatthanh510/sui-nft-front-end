import React from 'react';

export default function Background() {
  return (
    <div className="absolute z-0 h-full w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 h-[178px] w-[623px] -translate-x-1/2 -translate-y-1/2 bg-[#5434cb] blur-[150px]" />
      <div className="absolute right-0 top-0 h-[203px] w-[203px] bg-[#5434cb] blur-[150px]" />
      <div className="absolute right-0 top-1/2 h-[203px] w-[203px] translate-x-1/2  bg-[#34CB55] blur-[150px]" />
      <div className="absolute left-0 top-1/2 h-[87px] w-[420px] -translate-x-1/2 -translate-y-1/2 rotate-[120deg] bg-[#391AB5] blur-[150px]" />
    </div>
  );
}
