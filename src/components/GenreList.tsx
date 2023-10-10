import { HStack, Image, List, ListItem, Button, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';
import { ListSkeleton } from './ListSkeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data, error, isLoading} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11];

    if(error) return null;

    if(isLoading) return (
        <List>
           { skeletons.map((skeleton) => (
          <ListItem key={skeleton}>
            <ListSkeleton />
          </ListItem>
        ))}
        </List>
    );
  return (
    <>
        <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
        <List>
        {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
                <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={'cover'}
                />
                <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
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
}


