import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Flex,
  Stack,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [printValue, setPrintValue] = useState("");

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setPrintValue(inputValue);
  };

  return (
    <>
      <FormControl w="50%" id="first-name" isRequired>
        <Flex flexDirection="column">
          <FormLabel>First name</FormLabel>
          <Input onChange={handleChange} placeholder="First name" />
          <FormLabel>Last name</FormLabel>
          <Input placeholder="First name" />
          <Button onClick={handleClick} backgroundColor="blue.300" p={5} mt="2">
            Add
          </Button>
        </Flex>
        <p>{printValue}</p>
      </FormControl>
    </>
  );
};
