import { Button, Stack } from "@chakra-ui/react";
import { BiSolidLogIn } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";

function LogIn() {
  return (
    <>
      <Stack direction="row" align="right" maxW='' right='0'>
        <Button colorScheme="purple" variant="outline">
          Log In&nbsp;
          <BiSolidLogIn />
        </Button>
        <Button colorScheme="purple" variant="outline">
          Sign Up&nbsp;
          <IoMdCreate />
        </Button>
      </Stack>
    </>
  );
}

export default LogIn;
