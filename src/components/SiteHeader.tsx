import {Box, Container, Grid, GridItem, Image} from "@chakra-ui/react";
import LogIn from "./LogIn";

function SiteHeader() {
  return (
    <>
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
    <Container maxW="50%" pt={2} pb={2} bg='green.400'>
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
    </Container>
    </>
  );
}

export default SiteHeader;
