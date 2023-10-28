import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttribute } from "../components/GameAttribute";
import { GameTrailer } from "../components/Gametrailer";
import GameScreenShots from "../components/GameScreenShots";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttribute game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};
