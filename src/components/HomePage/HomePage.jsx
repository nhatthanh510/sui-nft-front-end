import { Category, Collections, Launchpad, Trending } from '@components/common/';

export default function Home() {
  return (
    <>
      <Trending />
      <Launchpad />
      <Collections />
      <Category />
    </>
  );
}
