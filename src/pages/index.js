import Image from 'next/image';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useGetDummyData } from '@hooks/queries/dummy';

export default function Home() {
  return (
    <div className="text-4xl text-red-500">
      <Image src="/vercel.svg" width={100} height={500} />
      asd
    </div>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(useGetDummyData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
