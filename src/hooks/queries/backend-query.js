import { getCollectionList } from '@services/frontend';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@constants/index';

export const useGetCollectionListQuery = () => {
  const result = useQuery([QUERY_KEY.COLLECTION_LIST], getCollectionList);
  return result;
};
