import React from "react";
import useTrailers from "../hooks/usetrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video
      width={"100%"}
      src={first.data[480]}
      poster={first.preview}
      controls
    ></video>
  ) : null;
};
