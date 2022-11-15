// import { QueryClient, dehydrate } from '@tanstack/react-query';
// import { getDummyData } from '@services/frontend';
import HomePage from '@components/HomePage';

export default function Home() {
  return <HomePage />;
}

// export const getServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['post'], getDummyData);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
