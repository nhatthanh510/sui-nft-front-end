import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/global.scss';
import '../styles/slick.scss';
import { ToastContainer } from 'react-toastify';
import Layout from '@components/common/Layout';
import localFont from '@next/font/local';

const josh = localFont({
  src: [
    {
      path: '../styles/fonts/Jost.woff2',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Jost-Italic.woff2',
      style: 'italic',
    },
  ],
});

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
          <NextNProgress color="#29D" startPosition={0.3} height={5} showOnShallow={false} />
          <main className={josh.className}>
            <Component {...pageProps} />
          </main>
          <ToastContainer
            position="bottom-right"
            hideProgressBar={true}
            autoClose={3000}
            closeOnClick
          />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
