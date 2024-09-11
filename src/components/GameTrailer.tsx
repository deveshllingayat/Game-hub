import useTrailers from "../hooks/userTrailers";
import { Box } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  const first = data?.results[0];
  if (isLoading) return null;
  if (error) throw error;

  return first ? (
    <Box display={'flex'} justifyContent={'center'}>
      <video
        src={first.data[480]}
        poster={first.preview}
        controls
      />
    </Box>
  ) : null;
};

export default GameTrailer;
