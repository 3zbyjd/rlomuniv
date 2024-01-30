import {Box, Center, Container, Flex, Grid, GridItem, Image, Spacer} from "@chakra-ui/react";
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
          <GridItem area={'Logo'}>
            <Center h='200px'>
              <Image
                src="/assets/img/rlom_univ_logo.png"
                alt="RLOM University Logo"
              />
            </Center>
          </GridItem>
          <GridItem pl='2' area={'Header'}>
            <LogIn />
          </GridItem>
          <GridItem pl='2' area={'HeaderBody'}>
            
          </GridItem>
        </Grid>
      </Container>    
    </>
  );
}

export default SiteHeader;
