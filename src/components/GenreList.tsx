import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
// import Genre  from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

// interface Props {
//   selectedGenreId?:number;
//   onSelectGenre: (genre: Genre) => void;
// }

const GenreList = () => {
  // const { genres } = useGenres();
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"xl"} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem paddingY={5} key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                objectFit={"cover"}
                borderRadius={4}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre?.id == selectedGenreId ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
                variant={"link"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
