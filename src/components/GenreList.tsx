import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { ListSkeleton } from "./ListSkeleton";
import useGameQueryStore from "../store";

export const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelecetdgenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton}>
            <ListSkeleton />
          </ListItem>
        ))}
      </List>
    );
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelecetdgenreId(genre.id)}
                fontSize={"lg"}
                variant={"link"}
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
