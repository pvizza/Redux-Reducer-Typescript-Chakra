const validatedInput = (values: any) => {
  let errors = {
    name: "",
    last: "",
  };

  if (!values.name.trim()) {
    errors.name = "name is required";
  }

  if (!values.last.trim()) {
    errors.last = "lastname is required";
  }
};

export default validatedInput;
