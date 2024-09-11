import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

// interface Props {
//   gameQuery: GameQuery;
// }
const GameHeading = () => {
  //using zustand store
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  // const genre = useGenre(gameQuery.genreId);
  // const selectedPlatform = usePlatform(gameQuery.platformId);


  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginBottom={5} fontSize={"5xl"} as={"h1"}>
      {" "}
      {heading}{" "}
    </Heading>
  );
};

export default GameHeading;
