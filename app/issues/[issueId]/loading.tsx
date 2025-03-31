import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailsLoadingSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap={"5"}>
        <Skeleton width={"4rem"} style={{ borderRadius: 8 }} />
        <Skeleton width={"9rem"} />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={4} />
      </Card>
    </Box>
  );
};

export default IssueDetailsLoadingSkeleton;
