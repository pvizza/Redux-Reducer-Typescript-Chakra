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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../actions/action";
import { validatedInput } from "../hooks/validatedInput";
import { Person } from "../interfaces/Person";

// interface Props {
//   callback: (data: any) => void;
// }
const initialState = {
  name: "",
  last: "",
};

export const Form = (/*{ callback }: Props*/) => {
  const [inputValue, setInputValue] = useState(initialState);
  const [errors, setErrors] = useState<Person>({});

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const newValues = { ...inputValue, [name]: value };
    setInputValue(newValues);
  };

  const handleClick = () => {
    if (inputValue.name !== "" && inputValue.last !== "") {
      dispatch(action(inputValue));
      setInputValue(initialState);
    }
    setErrors(validatedInput(inputValue));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            {errors.name && (
              <Alert mt={2} status="error">
                <AlertIcon />
                <Text fontWeight="medium">{errors.name}</Text>
              </Alert>
            )}
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
            {errors.last && (
              <Alert fontWeight="medium" mt={2} status="error">
                <AlertIcon />
                {errors.last}
              </Alert>
            )}
          </FormControl>
          <Button type="submit" colorScheme="blue" onClick={handleClick}>
            Add
          </Button>
        </Stack>
      </form>
    </>
  );
};
