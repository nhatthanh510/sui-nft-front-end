import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "src/constants";
import { getListNft } from "src/services";

export const useNftListQuery = (options) => {
  const result = useQuery([QUERY_KEY.NFT_LIST], () => getListNft(), {
    ...options,
  });
  return result;
};
