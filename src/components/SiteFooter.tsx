import { Container, Divider, Grid, GridItem} from "@chakra-ui/react";

function SiteFooter() {
    return (
        <>
            <Divider orientation="horizontal" bg="#4d4c4c" height="2" />
            <Container width="100%" backgroundImage="/assets/img/blackbrickBG.jpg">
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid>
            </Container>
        </>
    )
}

export default SiteFooter;