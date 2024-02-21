import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import UserType from "../../components/UserType";
import SiteHeader from "../../components/SiteHeader";

function EditUser() {
  return (
    <>
      <SiteHeader />
      <Divider orientation="horizontal" bg="#4d4c4c" height="2" />
      <Box
        bg="#cccccc"
        maxW="40%"
        padding="4"
        marginTop="25px"
        marginLeft="auto"
        marginRight="auto"
        borderRadius="md"
      >
        <FormControl>
          <FormLabel>
            First Name
            <br />
            <Input
              type="text"
              placeholder="Enter Firstname"
              focusBorderColor="purple.400"
            />
          </FormLabel>

          <FormLabel>
            Last Name
            <br />
            <Input
              type="text"
              placeholder="Enter Firstname"
              focusBorderColor="purple.400"
            />
          </FormLabel>

          <FormLabel>
            Email
            <br />
            <InputGroup>
              <InputLeftAddon>
                <MdOutlineAttachEmail />
              </InputLeftAddon>
              <Input
                type="email"
                placeholder="Enter Email"
                focusBorderColor="purple.400"
              />
            </InputGroup>
          </FormLabel>

          <FormLabel>
            Phone
            <br />
            <InputGroup>
              <InputLeftAddon>
                <FaPhoneSquareAlt />
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                focusBorderColor="purple.400"
              />
            </InputGroup>
          </FormLabel>

          <FormLabel>
            Mailing Address
            <br />
            <InputGroup>
              <InputLeftAddon>
                <FaPhoneSquareAlt />
              </InputLeftAddon>
              <Input
                type="text"
                placeholder="Enter Mailing Address"
                focusBorderColor="purple.400"
              />
            </InputGroup>
          </FormLabel>

          <FormLabel>
            Apt/Suite Number
            <br />
            <InputGroup>
              <InputLeftAddon>
                <FaPhoneSquareAlt />
              </InputLeftAddon>
              <Input
                type="text"
                placeholder="Enter Apt/Suite Number"
                focusBorderColor="purple.400"
              />
            </InputGroup>
          </FormLabel>

          <UserType />

          <Button colorScheme="purple.400" size="md">
            Button
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default EditUser;
