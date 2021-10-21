import { Stack, Flex } from "@chakra-ui/react";
import { Form } from "./form";
import { Contacts } from "./contacts";
import { Person } from "../interfaces/Person";
import { useState } from "react";

export const Hero = () => {
  const [inputValue, setInputValue] = useState<Person[]>([]);

  const handleContact = (data: Person) =>
    setInputValue([...inputValue, { ...data, id: getTimeForId() }]);

  const getTimeForId = (): number => new Date().getTime();

  const deleteContact = (id: number) =>
    setInputValue(inputValue.filter((x) => x.id !== id));

  return (
    <>
      <Stack w="100%" h="100vh" backgroundColor="gray.100">
        <Flex justifyContent="center">
          <Form callback={handleContact} />
        </Flex>

        <Contacts contacts={inputValue} deleteContact={deleteContact} />
      </Stack>
    </>
  );
};
