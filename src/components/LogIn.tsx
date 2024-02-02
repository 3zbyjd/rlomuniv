import { Button, Grid, GridItem } from "@chakra-ui/react";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";


function LogIn() {

  let isAuthenticated: boolean = true;

  if(isAuthenticated) {
    return (
      <>
      <Grid templateColumns='repeat(4, 1fr)' gap={1}>
      <GridItem bg='tomato'></GridItem>
      <GridItem bg='tomato' colSpan={2}></GridItem>
      <GridItem bg='tomato'>
        <text>
          Logged in as&#58; Demond Roberson
        </text>
      </GridItem>
      <GridItem bg='tomato'>
        <Button colorScheme="purple" variant="solid" size='xs' position='relative' left='130px'>
          Log Out&nbsp;
          <BiSolidLogOut />
        </Button>
      </GridItem>
      </Grid>        
      </>      
    );    
  }

  return (
    <>
    <Grid templateColumns='repeat(4, 1fr)' gap={1}>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem>
      <Button colorScheme='purple' variant='solid' size='xs'>
        Log In&nbsp;
        <BiSolidLogIn />
      </Button>
    </GridItem>
    <GridItem>
      <Button colorScheme='purple' variant='solid' size='xs' position='relative' left='130px'>
        Sign Up&nbsp;
        <IoMdCreate />
      </Button>
    </GridItem>
    </Grid>
    </>
  );
}

export default LogIn;
