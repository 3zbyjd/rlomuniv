import { Button, Stack } from "@chakra-ui/react";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";

let authenticated = false;

function LogIn() {
  return (
    <>
    if(!authenticated) {
      <Stack direction="row" maxW=''>
        <Button colorScheme="purple" variant="solid">
          Log In&nbsp;
          <BiSolidLogIn />
        </Button>
        <Button colorScheme="purple" variant="solid">
          Sign Up&nbsp;
          <IoMdCreate />
        </Button>
      </Stack>
} else {

      <Stack direction="row" maxW=''>
        <text>
          You are signed in as: "Demond"
        </text>
        <Button colorScheme="purple" variant="solid">
          Log Out&nbsp;
          <BiSolidLogOut />
        </Button>
      </Stack>
  }
    </>
  );
}

export default LogIn;
