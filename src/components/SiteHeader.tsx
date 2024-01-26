import {Box, Center, Container, Grid, GridItem, Image} from "@chakra-ui/react";
import LogIn from "./LogIn";

function SiteHeader() {
  return (
    <>
    <Container maxW='container.xl' pt={2}>
      <Grid
        templateAreas={`"Logo Header"
                        "Logo HeaderBody"`}
        gridTemplateRows={'50px 1fr'}
        gridTemplateColumns={'400px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem bg='orange.300' area={'Logo'}>
          <Center h='200px'>
            <Image
              src="/assets/img/rlom_univ_logo.png"
              alt="RLOM University Logo"
            />
          </Center>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'Header'}>
          <Box pt={2} mr='50px'><LogIn /></Box>
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'HeaderBody'}>
          Header Body
        </GridItem>
      </Grid>
    </Container>
    {/* <Container maxW="50%" pt={2} pb={2} bg='green.400'>
      <Box w="400px" h="160px" bg="pink.100">
        <Image
          src="/assets/img/rlom_univ_logo.png"
          alt="RLOM University Logo"
          pb={2}
        />       
      </Box>
      
    </Container>
    <Container maxW="25%">
      <Box w="400px" bg="purple.100"><LogIn /></Box>
    </Container> */}
    </>
  );
}

export default SiteHeader;
