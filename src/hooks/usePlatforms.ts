import { useQuery } from "@tanstack/react-query";
// import useData, { FetchResponse } from "./useData";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "./useGames";
// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }
// const usePlatforms = ()=> useData<Platform>('/platforms/lists/parents')
//using react query
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
