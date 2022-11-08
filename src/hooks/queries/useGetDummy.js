import { getDummyData } from '@services/frontend';
import { useQuery } from 'react-query';

export const useGetDummyData = () => {
  const result = useQuery('post', getDummyData);
  return result;
};
