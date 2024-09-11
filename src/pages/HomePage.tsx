import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* <GridItem area={"nav"}>
      <NavBar />
      {/* <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />* / }
    </GridItem> */}

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
          {/* <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        /> */}
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          {/* <GameHeading gameQuery={gameQuery} /> */}
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
              {/* <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            /> */}
            </Box>
            <SortSelector />
            {/* <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          /> */}
          </Flex>
        </Box>
        <GameGrid />
        {/* <GameGrid gameQuery={gameQuery} /> */}
      </GridItem>
    </Grid>
  );
};

export default HomePage;
