import { Box, Container, Image } from "@chakra-ui/react";
import LogIn from "./LogIn";

function SiteHeader() {
  return (
    <Container maxW="container.xl" pt={2} pb={2} bg='green.400'>
      <Box w="400px" h="160px" bg="pink.100">
        <Image
          src="/assets/img/rlom_univ_logo.png"
          alt="RLOM University Logo"
          pb={2}
        />       
      </Box>
      <Box bg="purple.100"><LogIn /></Box>
    </Container>
  );
}

export default SiteHeader;
