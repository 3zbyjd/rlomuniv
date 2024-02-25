import { Box, Button, Stack } from "@chakra-ui/react";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";
import "./LogIn.css";

function LogIn() {
  let isAuthenticated: boolean = true;

  if (isAuthenticated) {
    return (
      <>
        <Stack
          id="loggedInStack"
          direction={"row"}
          spacing={6}
          backgroundColor={"tomato"}
          width="45%"
        >
          <Box>
            <text>Logged in as&#58; Demond Roberson</text>
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
      <Stack direction={"row"} spacing={6} align="right">
        <Button
          rightIcon={<BiSolidLogIn />}
          colorScheme="purple"
          variant="solid"
          size="sm"
        >
          Log In
        </Button>
        <Button
          rightIcon={<IoMdCreate />}
          colorScheme="purple"
          variant="solid"
          size="sm"
        >
          Sign Up
        </Button>
      </Stack>
    </>
  );
}

export default LogIn;
