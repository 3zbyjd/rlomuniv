import { Divider, Grid, GridItem } from "@chakra-ui/react";
// import UserListData from "../../../public/assets/users.json";
// import { useState } from "react";
import SiteHeader from "../../components/SiteHeader";

// interface UserProp {
//   id: number;
//   username: string;
//   firstname: string;
//   lastname: string;
//   email: string;
//   address1: string;
//   address2: string;
//   phone1: string;
//   userType: string;
//   password: string;
// }

// const [userList, setUserList] = useState<UserProp[]>(UserListData);
// setUserList;

function UserList() {
  return (
    <>
      <SiteHeader />
      <Divider
        orientation="horizontal"
        bg="#4d4c4c"
        height="2"
        marginBottom="25px"
      />
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </>
  );
}

export default UserList;
