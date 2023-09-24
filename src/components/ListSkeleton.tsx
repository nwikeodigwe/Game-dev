import { HStack, Skeleton,Text, SkeletonText } from "@chakra-ui/react";

export const ListSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize={"32px"} borderRadius={4}></Skeleton>
      <SkeletonText />
    </HStack>
  );
};
