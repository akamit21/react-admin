import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import { UserList, UserCreate, UserEdit } from "./Users";
import { PostList, PostEdit, PostCreate } from "./Posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
// import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = jsonServerProvider(
  "https://amit-json-server.herokuapp.com"
);
const App = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  );
};

export default App;
