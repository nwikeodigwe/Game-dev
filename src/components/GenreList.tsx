import { HStack, Image, List, ListItem, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';
import { ListSkeleton } from './ListSkeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectGenre}: Props) => {
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
    <List>
        {data.map((genre) => (
            <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
                <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                />
                <Button onClick={() => onSelectGenre(genre)
                } fontSize={'lg'} variant={'link'}>{genre.name}</Button>
            </HStack>
            </ListItem>
        ))}
    </List>
  );
}


