// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
// import useData, { FetchResponse } from "./useData";
// import { Genre } from "./useGenres";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }
//

//using react query to fetch games optimally
const useGames = (gameQuery: GameQuery | null) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
  });
};

//this way we have hide our endpoint /games from directly exposing in the component
// const useGames = (
//   gameQuery: GameQuery | null
//   // selectedGenre: Genre | null,
//   // selectedPlatform: Platform | null
// ) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery?.genre?.id,
//         platforms: gameQuery?.platform?.id,
//         ordering: gameQuery?.sortOrder,
//         search: gameQuery?.searchText,
//       },
//     },
//     [gameQuery]
//   );

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//
//   useEffect(() => {
//     const controller = new AbortController();
//
//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//
//     return () => controller.abort();
//   }, []);
//   return { games, error, isLoading };
// };
export default useGames;
