import { Button, Stack } from "@chakra-ui/react";
//import { useState } from "react";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";

// const [isAuthenticated, setAuthentication] = useState(false);


function LogIn() {

  let isAuthenticated: boolean = true;

  if(isAuthenticated) {
    return (
      <>
        <Stack direction="row" maxW=''>
          <text>
            Logged in as&#58; Demond
          </text>
          <Button colorScheme="purple" variant="solid" size='sm'>
            Log Out&nbsp;
            <BiSolidLogOut />
          </Button>
        </Stack>
      </>      
    );    
  }

  return (
    <>
      <Stack direction='row' maxW=''>
        <Button colorScheme='purple' variant='solid' size='sm'>
          Log In&nbsp;
          <BiSolidLogIn />
        </Button>
        <Button colorScheme='purple' variant='solid' size='sm'>
          Sign Up&nbsp;
          <IoMdCreate />
        </Button>
      </Stack>
    </>
  );
}

export default LogIn;
