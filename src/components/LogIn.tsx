import { Button, Stack } from "@chakra-ui/react";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";

function LogIn() {
  let isAuthenticated: boolean = true;

  if (isAuthenticated) {
    return (
      <>
        <Stack direction={"row"} spacing={1} backgroundColor={"tomato"}>
          <text>Logged in as&#58; Demond Roberson</text>
          <Button
            rightIcon={<BiSolidLogOut />}
            colorScheme="purple"
            variant="solid"
            size="xs"
            position="relative"
            left="130px"
          >
            Log Out
          </Button>
        </Stack>
      </>
    );
  }

  return (
    <>
      <Stack direction={"row"} spacing={1}>
        <Button
          rightIcon={<BiSolidLogIn />}
          colorScheme="purple"
          variant="solid"
          size="xs"
          position="relative"
          left="130px"
        >
          Log In
        </Button>
        <Button
          rightIcon={<IoMdCreate />}
          colorScheme="purple"
          variant="solid"
          size="xs"
          position="relative"
          left="130px"
        >
          Sign Up
        </Button>
      </Stack>
    </>
  );
}

export default LogIn;
