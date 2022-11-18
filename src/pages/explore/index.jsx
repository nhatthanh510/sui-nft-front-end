import ExplorePage from '@components/ExplorePage';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useGetCollectionListQuery } from '@hooks/queries/index';
import { getCollectionList } from '@services/frontend';
import { QUERY_KEY } from '@constants/index';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY.COLLECTION_LIST], getCollectionList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Explore() {
  const { data } = useGetCollectionListQuery();

  return <ExplorePage collections={data} />;
}
