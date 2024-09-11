import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import GameScreenshot from "../entities/GameScreenshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<GameScreenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenshots;
