import { Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";

export const Header = memo(() => {
  return (
    <>
      <Flex
        as="nav"
        bg="red.300"
        color="blackAlpha"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        position="fixed"
        width="100%" // 横いっぱいにヘッダーを広げる
        opacity="0.8"
        zIndex="10"
      >
        <Flex _hover={{ cursor: "pointer" }}>
          <Heading>Hello World Site</Heading>
        </Flex>
      </Flex>
    </>
  );
});
