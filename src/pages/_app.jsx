import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/global.scss';
import '../styles/slick.scss';
import { ToastContainer } from 'react-toastify';
import Layout from '@components/common/Layout';
import { josh, reactQueryConfig, nProgressConfig, toastConfig } from '@config/app.config';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: reactQueryConfig,
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <NextNProgress {...nProgressConfig} />
          <main className={josh.className}>
            <Component {...pageProps} />
          </main>
          <ToastContainer {...toastConfig} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
