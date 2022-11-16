import axios from 'axios';

export const getDummyData = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  return res.data;
};

export const formatAddress = (address) => {
  if (!address) return '';
  return address.substring(0, 10) + '...' + address.substring(address.length - 3);
};

export const getIpfsUrl = (tokenURI) => {
  if (!tokenURI) return '';
  return tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
};
