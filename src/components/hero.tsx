import { Stack, Flex } from "@chakra-ui/react";
import { Form } from "./form";

export const Hero = () => {
  return (
    <>
      <Stack w="100%" h="100vh" backgroundColor="blue.600">
        <Flex justifyContent="center">
          <Form />
        </Flex>
      </Stack>
    </>
  );
};
