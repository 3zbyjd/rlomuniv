import { Button, Stack } from "@chakra-ui/react";
import { BiSolidLogIn } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";

function LogIn() {
  return (
    <>
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
    </>
  );
}

export default LogIn;
