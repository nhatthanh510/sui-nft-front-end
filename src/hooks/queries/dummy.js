import { getDummyData } from '@services/frontend';
import { QUERY_KEY } from '@constants/query-key';
import { useQuery } from '@tanstack/react-query';

export const useGetDummyData = () => {
  const result = useQuery([QUERY_KEY.DUMMY], getDummyData);
  return result;
};
