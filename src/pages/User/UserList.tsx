import {
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import UserListData from "../../../public/assets/users.json";
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

      <TableContainer>
        <Table variant="striped" colorScheme="#d9d9d9">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>User Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {UserListData.map((user) => (
              <Tr>
                <Td>
                  {user.firstname} {user.lastname}
                </Td>
                <Td>{user.email}</Td>
                <Td>{user.userType}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserList;
