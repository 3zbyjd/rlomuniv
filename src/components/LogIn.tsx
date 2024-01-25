import { Box, Button } from "@chakra-ui/react";
import { BiSolidLogIn } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";

function LogIn() {
  return (
    <>
      <Box>
        <Button colorScheme="purple" variant="outline">
          Log In&nbsp;
          <BiSolidLogIn />
        </Button>
        <Button colorScheme="purple" variant="outline">
          Sign Up&nbsp;
          <IoMdCreate />
        </Button>
      </Box>
    </>
  );
}

export default LogIn;
