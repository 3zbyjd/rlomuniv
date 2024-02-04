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
  IconButton,
} from "@chakra-ui/react";
//import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import data from "../../public/assets/course_catalog.json";

// interface Course {
//   id: number;
//   imageName: string;
//   imageSrc: string;
//   courseHeading: string;
//   courseDescription: string;
//   formattedCoursePrice: string;
// }

// interface Courses {
//   courses: Course[];
// }

//const [courses, setCourses] = useState(data);
//const [currentPage, setCurrentPage] = useState(1);
//const [courscesPerPage, setCoursesPerPage] = useState(8);

const CourseCardList = () => {
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
        <SimpleGrid columns={5} spacing={1} p={2}>
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            icon={<FaAngleDoubleLeft />}
          />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            icon={<FaAngleLeft />}
          />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            icon={<FaAngleRight />}
          />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="purple"
            aria-label="Done"
            fontSize="20px"
            icon={<FaAngleDoubleRight />}
          />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default CourseCardList;
