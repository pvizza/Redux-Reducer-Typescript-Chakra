import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Person } from "../interfaces/Person";

interface Props {
  contacts: Person[];
  deleteContact: (id: number) => void;
}

export const Contacts = ({ contacts, deleteContact }: Props) => {
  return (
    <>
      <Table variant="striped" colorScheme="telegram">
        <TableCaption>Contacts List</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>Name</Th>
            <Th>Lastname</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contacts.map((contact, id) => (
            <Tr key={id}>
              <Td> {contact.id % 10000} </Td>
              <Td> {contact.name}</Td>
              <Td>{contact.last}</Td>
              <Td>
                <button onClick={() => deleteContact(contact.id)}>
                  <DeleteIcon color="blue.600" />
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>id</Th>
            <Th>name</Th>
            <Th>Lastname</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};
