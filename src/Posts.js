import React from "react";
import {
  Filter,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  required,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = (props) => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="Select user ... "
        source="userId"
        reference="users"
        fullWidth={true}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput
        label="Enter blog title ... "
        source="title"
        validate={[required()]}
        fullWidth={true}
      />
      <RichTextInput
        label="Write blog content ... "
        source="blog"
        validate={[required()]}
        fullWidth={true}
        multiline
      />
    </SimpleForm>
  </Create>
);
