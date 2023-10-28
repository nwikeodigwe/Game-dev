import { Button, Text } from "@chakra-ui/react";
import React, { Children, useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + '... ';

  return (
    <Text>
      {summary}
      <Button marginLeft={1}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read More"}
      </Button>
    </Text>
  );
};
