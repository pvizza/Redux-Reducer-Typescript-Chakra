import { Stack, Flex } from "@chakra-ui/react";
import { Form } from "./form";
import { Contacts } from "./contacts";
import { Person } from "../interfaces/Person";
import { useState, useReducer } from "react";
import { ContactsReducer } from "../reducers/ContactsReducer";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/store";

export const Hero = () => {
  const [inputValue, setInputValue] = useState<Person[]>([]);

  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(action());
  };

  const receivesValue = useSelector((state: any) => state.counter);
  console.log(receivesValue);

  const handleContact = (data: Person) => {
    setInputValue([...inputValue, { ...data, id: getTimeForId() }]);
    console.log(inputValue);
  };
  const getTimeForId = (): number => new Date().getTime();

  const deleteContact = (id: number) =>
    setInputValue(inputValue.filter((x) => x.id !== id));

  return (
    <>
      <Stack w="100%" h="100vh" backgroundColor="gray.100">
        <Flex justifyContent="center">
          <Form callback={handleContact} />
          <button onClick={handleDispatch}>dispatch</button>
          {receivesValue}
        </Flex>

        <Contacts contacts={inputValue} deleteContact={deleteContact} />
      </Stack>
    </>
  );
};
// () => dispatch({ type: "ACTION" })
