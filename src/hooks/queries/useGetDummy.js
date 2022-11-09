import { getDummyData } from '@services/frontend';
import { useQuery } from '@tanstack/react-query';

export const useGetDummyData = () => {
  const result = useQuery(getDummyData);
  return result;
};
