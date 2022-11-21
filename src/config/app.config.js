import localFont from '@next/font/local';

export const josh = localFont({
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
  preload: true,
});

export const reactQueryConfig = {
  staleTime: 24 * 1000 * 3600,
  refetchOnWindowFocus: false,
  retry: false,
};

export const nProgressConfig = {
  color: '#29D',
  startPosition: 0.3,
  height: 5,
  showOnShallow: false,
};

export const toastConfig = {
  position: 'bottom-right',
  hideProgressBar: true,
  autoClose: 3000,
  closeOnClick: true,
};
