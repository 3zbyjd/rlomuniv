import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";


function LogIn() {

  let isAuthenticated: boolean = true;

  if(isAuthenticated) {
    return (
      <>
      <SimpleGrid columns={4} spacing={1} bg='gray.50'>
      <Box bg='tomato'></Box>
      <Box bg='tomato'></Box>
      <Box bg='tomato' alignContent='end'>
        <text>
          Logged in as&#58; Demond
        </text>
      </Box>
      <Box bg='tomato' alignContent='end'>
        <Button colorScheme="purple" variant="solid" size='xs'>
          Log Out&nbsp;
          <BiSolidLogOut />
        </Button>
      </Box>
      </SimpleGrid>        
      </>      
    );    
  }

  return (
    <>
    <SimpleGrid columns={4} spacing={1} bg='gray.50'>
    <Box bg='tomato'></Box>
    <Box bg='tomato'></Box>
    <Box bg='tomato' alignContent='end'>
      <Button colorScheme='purple' variant='solid' size='xs'>
        Log In&nbsp;
        <BiSolidLogIn />
      </Button>
    </Box>
    <Box bg='tomato' alignContent='end'>
      <Button colorScheme='purple' variant='solid' size='xs'>
        Sign Up&nbsp;
        <IoMdCreate />
      </Button>
    </Box>
    </SimpleGrid>
    </>
  );
}

export default LogIn;
