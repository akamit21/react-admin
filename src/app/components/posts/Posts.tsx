import React from "react";
import {
  Filter,
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
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
      <DateField source="published_on" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" fullWidth={true} />
      <ReferenceInput
        label="Select user ... "
        source="userId"
        reference="users"
        fullWidth={true}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput
        label="Select date ... "
        source="published_on"
        validate={[required()]}
        fullWidth={true}
      />
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
      <DateInput
        label="Select date ... "
        source="published_on"
        validate={[required()]}
        fullWidth={true}
      />
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
