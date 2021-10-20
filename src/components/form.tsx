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
import { ChangeEvent, useState } from "react";
import {Contacts} from './contacts'

interface Props {
  callback: (data:any) => void
}
const initialState = {
  name:'',
  last:''

}
export const Form = ({callback}:Props) => {
  const [inputValue, setInputValue] = useState(initialState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const newValues = {...inputValue, [name]: value };
    setInputValue(newValues);
  };

  const handleClick = () => {
    if (initialState.name !== '' && initialState.last !== '') {
    setInputValue(inputValue);
    callback(inputValue)
    setInputValue(initialState)
    
    }
    
  };

  

  return (
    <>
      <FormControl w="50%" id="first-name" isRequired>
        <Flex flexDirection="column">
          <FormLabel >First name</FormLabel>
          <Input value={inputValue.name} name="name" onChange={handleChange} placeholder="First name" />
          <FormLabel>Last name</FormLabel>
          <Input value={inputValue.last} name="last" onChange={handleChange} placeholder="First name" />
          <Button onClick={handleClick} backgroundColor="blue.300" p={5} mt="2">
            Add
          </Button>
        </Flex>
      </FormControl>
    </>
  );
};