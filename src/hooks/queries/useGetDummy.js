import { getDummyData } from '@services/frontend';
import { useQuery } from '@tanstack/react-query';

export const useGetDummyData = () => {
  const result = useQuery(['post', '1'], getDummyData);
  return result;
};
