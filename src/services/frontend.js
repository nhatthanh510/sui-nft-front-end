export const getCollectionList = async () => {
  const mockData = [
    {
      id: 1,
      name: 'Collection 1',
    },
    {
      id: 2,
      name: 'Collection 2',
    },
  ];

  const data = await new Promise((resolve) => setTimeout(() => resolve(mockData), 500));
  return data;
};

export const formatAddress = (address) => {
  if (!address) return '';
  return address.substring(0, 10) + '...' + address.substring(address.length - 3);
};

export const getIpfsUrl = (tokenURI) => {
  if (!tokenURI) return '';
  return tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
};
