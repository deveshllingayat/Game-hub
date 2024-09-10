import { Fragment, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
import { Platform } from "../hooks/usePlatforms";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery | null;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  if (error) return <Text>{error.message}</Text>;
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedGamesCount =
    data?.pages?.reduce((acc, page) => acc + page?.results?.length, 0) || 0;
  return (
    /* all the four props are necessary for infinitescroll, dataLength is length of no. of games on the page, hasMore is a boolean i.e if we have
     next page or not , next expects a callback function to fetch nextpage games, loader is a loading spinner
    we used infinitequery and got the properties such as hasNextPage which tells if we have it or not, fetchNextPage() to fetch next page data
    we have calculated fetchedGamesCount before using reduce method to let infiniteScroll know the no. of games on the page

    */
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* In infinite queries we get pageParams,pages inside data object and inside pages array we get page objects with desired response i.e results array  */}
        {data?.pages?.map((page, index) => (
          <Fragment key={index}>
            {page?.results?.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
        {/* {data?.results?.map((game: Game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))} */}
      </SimpleGrid>
      {/* As we have implemented infinite scroll we dont require load more button */}
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </InfiniteScroll>
  );
};

export default GameGrid;
