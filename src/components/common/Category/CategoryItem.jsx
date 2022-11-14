import Image from 'next/image';
import Link from 'next/link';

export default function CategoryItem() {
  return (
    <div className="mt-10">
      <Link href="">
        <Image
          src="/assets/images/category.jpg"
          width={272}
          height={178}
          alt=""
          className="w-full rounded-3xl"
        />
      </Link>
      <h3 className="mt-4 text-[18px] font-bold">
        <Link href="" className="gradient-text">
          Art
        </Link>
      </h3>
      <p className="text-base text-gray">2 Collections</p>
    </div>
  );
}
