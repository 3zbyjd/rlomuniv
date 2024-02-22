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
        bg="purple.100"
        maxW="40%"
        padding="4 4 20 4"
        marginTop="25px"
        marginLeft="auto"
        marginRight="auto"
        borderRadius="md"
        border={1}
        shadow={1}
      >
        <FormControl>
          <FormLabel>
            First Name
            <br />
            <Input
              type="text"
              placeholder="Enter Firstname"
              focusBorderColor="red"
            />
          </FormLabel>

          <FormLabel>
            Last Name
            <br />
            <Input
              type="text"
              placeholder="Enter Firstname"
              focusBorderColor="red"
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
                focusBorderColor="red"
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
                focusBorderColor="red"
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
                focusBorderColor="red"
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
                focusBorderColor="red"
              />
            </InputGroup>
          </FormLabel>

          <UserType />

          <Button colorScheme="red" size="md" marginTop={2}>
            submit
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default EditUser;
