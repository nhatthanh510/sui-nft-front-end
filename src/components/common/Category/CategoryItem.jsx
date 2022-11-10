import Image from 'next/image';
import Link from 'next/link';

export default function CategoryItem() {
  return (
    <Link href="" className="mt-10">
      <Image
        src="/assets/images/category.jpg"
        width={272}
        height={178}
        alt=""
        className="w-full rounded-2xl"
      />
      <h3 className="mt-4 text-[18px] font-bold">Art</h3>
      <p className="text-base text-gray">2 Collections</p>
    </Link>
  );
}
