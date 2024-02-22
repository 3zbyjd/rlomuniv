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
import { MdEmail } from "react-icons/md";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import UserType from "../../components/UserType";
import SiteHeader from "../../components/SiteHeader";

function EditUser() {
  return (
    <>
      <SiteHeader />
      <Divider orientation="horizontal" bg="#4d4c4c" height="2" />
      <Box
        bg="purple.200"
        maxW="40%"
        padding="4"
        marginTop="25px"
        marginLeft="auto"
        marginRight="auto"
        marginBottom="100px"
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
              focusBorderColor="purple"
            />
          </FormLabel>

          <FormLabel>
            Last Name
            <br />
            <Input
              type="text"
              placeholder="Enter Firstname"
              focusBorderColor="purple"
            />
          </FormLabel>

          <FormLabel>
            Email
            <br />
            <InputGroup>
              <InputLeftAddon>
                <MdEmail />
              </InputLeftAddon>
              <Input
                type="email"
                placeholder="Enter Email"
                focusBorderColor="purple"
              />
            </InputGroup>
          </FormLabel>

          <FormLabel>
            Phone
            <br />
            <InputGroup>
              <InputLeftAddon>
                <FaPhoneAlt />
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                focusBorderColor="purple"
              />
            </InputGroup>
          </FormLabel>

          <FormLabel>
            Mailing Address
            <br />
            <InputGroup>
              <InputLeftAddon>
                <FaAddressCard />
              </InputLeftAddon>
              <Input
                type="text"
                placeholder="Enter Mailing Address"
                focusBorderColor="purple"
              />
            </InputGroup>
          </FormLabel>

          <FormLabel>
            Apt/Suite Number
            <br />
            <InputGroup>
              <InputLeftAddon>
                <FaAddressCard />
              </InputLeftAddon>
              <Input
                type="text"
                placeholder="Enter Apt/Suite Number"
                focusBorderColor="purple"
              />
            </InputGroup>
          </FormLabel>

          <UserType />

          <Button colorScheme="red" size="md" marginTop={2}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default EditUser;
