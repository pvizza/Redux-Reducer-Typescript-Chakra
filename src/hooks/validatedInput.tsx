import { Person } from "../interfaces/Person";

export const validatedInput = (values: Person) => {
  let errors = {
    name: "",
    last: "",
  };

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.last.trim()) {
    errors.last = "Last name is required";
  }

  return errors;
};
