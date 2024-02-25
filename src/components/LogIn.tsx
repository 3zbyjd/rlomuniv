import { Box, Button, Stack } from "@chakra-ui/react";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";
import "./LogIn.css";

function LogIn() {
  let isAuthenticated: boolean = false;

  if (isAuthenticated) {
    return (
      <>
        <Stack direction={"row"} spacing={6} width="80%">
          <Box width="85%">
            <text>Logged in as&#58; Demond Lamont Roberson</text>
          </Box>
          <Button
            rightIcon={<BiSolidLogOut />}
            colorScheme="purple"
            variant="solid"
            size="xs"
          >
            Log Out
          </Button>
        </Stack>
      </>
    );
  }

  return (
    <>
      <Stack direction={"row"} spacing={2} align="right" width="80%">
        <Box width="75%"></Box>
        <Button
          rightIcon={<BiSolidLogIn />}
          colorScheme="purple"
          variant="solid"
          size="xs"
        >
          Log In
        </Button>
        <Button
          rightIcon={<IoMdCreate />}
          colorScheme="purple"
          variant="solid"
          size="xs"
        >
          Sign Up
        </Button>
      </Stack>
    </>
  );
}

export default LogIn;
