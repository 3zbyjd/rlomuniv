import {
  Button,
  Divider,
  Stack,
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
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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

      <TableContainer
        width="80%"
        margin="0 auto"
        border="1px"
        borderRadius="4px"
      >
        <Table variant="striped" colorScheme="gray">
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
                <Td>
                  <Stack direction="row" spacing={1}>
                    <Button
                      leftIcon={<FaUserEdit />}
                      colorScheme="purple"
                      variant="solid"
                    >
                      Edit
                    </Button>
                    <Button
                      leftIcon={<MdDelete />}
                      colorScheme="red"
                      variant="solid"
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserList;
