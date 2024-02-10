import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import Pagination from "./pagination";
import data from "../../public/assets/course_catalog.json";
import { useState } from "react";

const CourseCardList = () => {
  const pageLimit = 8;
  const [itemList, setItemlist] = useState([]);

  return (
    <>
      <Container maxWidth="container.xl">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {data.map((course) => (
            <Card maxW="xs" key={course.id}>
              <CardBody>
                <Image
                  src={course.imageSrc}
                  alt={course.imageName}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{course.courseHeading}</Heading>
                  <Text>{course.courseDescription}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    {course.formattedCoursePrice}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default CourseCardList;
