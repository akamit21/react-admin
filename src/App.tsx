import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./app/components/dashboard/Dashboard";
import { UserList, UserCreate, UserEdit } from "./app/components/users/Users";
import { PostList, PostEdit, PostCreate } from "./app/components/posts/Posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import {
  LocationList,
  LocationCreate,
} from "./app/components/locations/Locations";
import { BookList, BookCreate } from "./app/components/books/Books";
// import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = jsonServerProvider("http://localhost:3500");
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
      <Resource
        name="locations"
        list={LocationList}
        create={LocationCreate}
        icon={PostIcon}
      />
      <Resource name="books" list={BookList} create={BookCreate} />
    </Admin>
  );
};

export default App;
