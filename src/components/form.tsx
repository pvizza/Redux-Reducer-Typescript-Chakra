import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Flex,
} from "@chakra-ui/react";

export const Form = () => {
  return (
    <>
      <Flex as="div" w="20%" justify="center">
        <FormControl id="first-name" isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
      </Flex>
    </>
  );
};
