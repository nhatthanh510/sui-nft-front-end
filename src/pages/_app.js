import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 24 * 1000 * 3600,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <>
            <NextNProgress color="#29D" startPosition={0.3} height={5} showOnShallow={false} />
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-right"
              hideProgressBar={true}
              autoClose={3000}
              closeOnClick
            />
          </>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
