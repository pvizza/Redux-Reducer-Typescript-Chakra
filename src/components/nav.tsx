import { Center, Text, Link } from "@chakra-ui/react";

export const Nav = () => {
  return (
    <>
      <Center w="100%" h="50" backgroundColor="blue.600">
        <Link as="span" mr="2" color="white" fontWeight="bold">
          index
        </Link>
        <Link as="span" mr="2" color="white" fontWeight="bold">
          contacts
        </Link>
        <Link as="span" mr="2" color="white" fontWeight="bold">
          list
        </Link>
      </Center>
    </>
  );
};
