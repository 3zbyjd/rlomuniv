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
      <Box bg='tomato' left={10}>
        <text>
          Logged in as&#58; Demond
        </text>
      </Box>
      <Box bg='tomato'>
        <Button colorScheme="purple" variant="solid" size='xs' position='relative' left='90px'>
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
    <Box bg='tomato' right={10}>
      <Button colorScheme='purple' variant='solid' size='xs'>
        Log In&nbsp;
        <BiSolidLogIn />
      </Button>
    </Box>
    <Box bg='tomato'>
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
