import { Divider, Grid, GridItem} from "@chakra-ui/react";

function SiteFooter() {
    return (
        <>
            <Divider orientation="horizontal" bg="#4d4c4c" height="2" />
            <Grid
                h='300px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                backgroundImage="/assets/img/blackbrickBG.jpg"
            >
                <GridItem rowSpan={2} colSpan={1} />
                <GridItem colSpan={2} />
                <GridItem colSpan={2} />
                <GridItem colSpan={4} />
            </Grid>
            {/* </Container> */}
        </>
    )
}

export default SiteFooter;