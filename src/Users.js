import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  NumberInput,
  RadioButtonGroupInput,
  required,
  email,
  regex,
  minLength,
  maxLength,
  choices,
} from "react-admin";

// user list
export const UserList = (props) => (
  <List title="Users List" {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="gender" />
      <EditButton />
    </Datagrid>
  </List>
);

// edit users
export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" fullWidth={true} />
      <TextInput
        label="Enter full name ... "
        source="name"
        validate={[required()]}
        fullWidth={true}
      />
      <TextInput
        label="Enter email Address ... "
        source="email"
        type="email"
        validate={[required(), email()]}
        fullWidth={true}
      />
      <PasswordInput
        label="Enter password"
        source="password"
        validate={[required(), minLength(3), maxLength(15)]}
        fullWidth={true}
      />
      <NumberInput
        label="Enter phone number"
        source="phone"
        validate={[required(), validatePhone]}
        fullWidth={true}
      />
      <RadioButtonGroupInput
        source="gender"
        choices={[
          { id: "male", name: "Male" },
          { id: "female", name: "Female" },
          { id: "other", name: "Other" },
        ]}
        validate={validateGender}
        fullWidth={true}
      />
    </SimpleForm>
  </Edit>
);

// create users
const validatePhone = regex(/^\d{10}$/, "Must be a valid phone number");
const validateGender = choices(
  ["male", "female", "other"],
  "Must be Male, Female or Other"
);
export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label="Enter full name ... "
        source="name"
        validate={[required()]}
        fullWidth={true}
      />
      <TextInput
        label="Enter email Address ... "
        source="email"
        type="email"
        validate={[required(), email()]}
        fullWidth={true}
      />
      <PasswordInput
        label="Enter password"
        source="password"
        validate={[required(), minLength(3), maxLength(15)]}
        fullWidth={true}
      />
      <NumberInput
        label="Enter phone number"
        source="phone"
        validate={[required(), validatePhone]}
        fullWidth={true}
      />
      <RadioButtonGroupInput
        source="gender"
        choices={[
          { id: "male", name: "Male" },
          { id: "female", name: "Female" },
          { id: "other", name: "Other" },
        ]}
        validate={validateGender}
        fullWidth={true}
      />
    </SimpleForm>
  </Create>
);
