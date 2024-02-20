import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import UserType from "../../components/UserType";

function EditUser() {
  return (
    <>
      <Box
        bg="#ddccff"
        maxW="80%"
        padding="4"
        marginLeft="auto"
        marginRight="auto"
      >
        <FormControl>
          <FormLabel>
            First Name
            <br />
            <Input type="text" placeholder="Enter Firstname" />
          </FormLabel>

          <FormLabel>
            Last Name
            <br />
            <Input type="text" placeholder="Enter Firstname" />
          </FormLabel>

          <FormLabel>
            Email
            <br />
            <InputGroup>
              <InputLeftAddon>
                <MdOutlineAttachEmail />
              </InputLeftAddon>
              <Input type="email" placeholder="Enter Email" />
            </InputGroup>
          </FormLabel>

          <FormLabel>
            Phone
            <br />
            <InputGroup>
              <InputLeftAddon>
                <FaPhoneSquareAlt />
              </InputLeftAddon>
              <Input type="tel" placeholder="Enter Phone Number" />
            </InputGroup>
          </FormLabel>

          <UserType />
        </FormControl>
      </Box>
    </>
  );
}

export default EditUser;
