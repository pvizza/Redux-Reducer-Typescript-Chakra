import { Stack, Flex } from "@chakra-ui/react";
import { Form } from "./form";
import { Contacts } from "./contacts";
import { Person } from "../interfaces/Person";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Hero = () => {
  const [inputValue, setInputValue] = useState<Person[]>([]);

  const receivesValue = useSelector(
    (store: RootState) => store.contactReducer.inputValue
  );
  const getTimeForId = (): number => new Date().getTime();

  useEffect(() => {
    if (receivesValue) {
      setInputValue([...inputValue, { ...receivesValue, id: getTimeForId() }]);
    }
  }, [receivesValue]);

  const deleteContact = (id: number) =>
    setInputValue(inputValue.filter((x) => x.id !== id));

  return (
    <>
      <Stack w="100%" h="100vh" backgroundColor="gray.100">
        <Flex justifyContent="center">
          <Form />
        </Flex>

        <Contacts contacts={inputValue} deleteContact={deleteContact} />
      </Stack>
    </>
  );
};

/* to-do: 
  night mode

*/
