// import { Grid, GridItem } from "@chakra-ui/react";
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
      {/* //       <Grid templateColumns="repeat(7, 1fr)" gap={1}>
//         {userList.map((userData) => (
//           <>
//             <GridItem w="100%" bg="gray.100">
//               {userData.firstname} {userData.lastname}
//             </GridItem>
//             <GridItem w="100%" bg="gray.100">
//               {userData.email}
//             </GridItem>
//             <GridItem w="100%" bg="gray.100">
//               {userData.address1} {userData.address2}
//             </GridItem>
//             <GridItem w="100%" bg="gray.100">
//               {userData.phone1}
//             </GridItem>
//           </>
//         ))}
//       </Grid> */}
    </>
  );
}

export default UserList;
