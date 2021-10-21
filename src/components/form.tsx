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
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

interface Props {
  callback: (data: any) => void;
}
const initialState = {
  name: "",
  last: "",
};
export const Form = ({ callback }: Props) => {
  const [inputValue, setInputValue] = useState(initialState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const newValues = { ...inputValue, [name]: value };
    setInputValue(newValues);
  };

  const handleClick = () => {
    if (inputValue.name !== "" && inputValue.last !== "") {
      setInputValue(inputValue);
      callback(inputValue);
      setInputValue(initialState);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack mt={4} spacing={3}>
          <FormControl id="first-name">
            <InputGroup>
              <InputLeftElement children={<InfoIcon color="blue.600" />} />
              <Input
                value={inputValue.name}
                name="name"
                onChange={handleChange}
                placeholder="First name"
              />
            </InputGroup>
          </FormControl>
          <FormControl id="last-name">
            <InputGroup>
              <InputLeftElement children={<InfoIcon color="blue.600" />} />
              <Input
                value={inputValue.last}
                name="last"
                onChange={handleChange}
                placeholder="Last name"
              />
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="blue" onClick={handleClick}>
            Add
          </Button>
        </Stack>
      </form>
    </>
  );
};
