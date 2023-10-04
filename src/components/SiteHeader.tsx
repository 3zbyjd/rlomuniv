import { Box, Container, Image } from '@chakra-ui/react';
import LogIn from './LogIn';
import logo from '/assets/img/rlom_univ_logo.png';

function SiteHeader() {

    return (
        <Container maxW='container.xl' pt={2} pb={2}>
            <Box w='400px' h='160px'>
                <Image src={logo} alt='RLOM University Logo' pb={2} /> 
                <LogIn />   
            </Box>
        </Container>
    );
}

export default SiteHeader;