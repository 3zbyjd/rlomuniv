import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import Pagination from "./pagination";
import data from "../../public/assets/course_catalog.json";
import "./CourseCard.css";
import { useState } from "react";

interface CourseProp {
  id: number;
  imageName: string;
  imageSrc: string;
  courseHeading: string;
  courseDescription: string;
  formattedCoursePrice: number;
}

const CourseCardList = () => {
  const pageLimit = 8;
  const [courseList, setCourselist] = useState<CourseProp[]>([]);

  return (
    <>
      <Container maxWidth="container.xl">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {courseList.map((course) => (
            <Card maxW="xs" key={course.id}>
              <CardBody>
                <Image
                  src={course.imageSrc}
                  alt={course.imageName}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">
                    <Link href="/Course">{course.courseHeading}</Link>
                  </Heading>
                  <Text>{course.courseDescription}</Text>
                  <Text color="purple" fontSize="2xl">
                    {course.formattedCoursePrice}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="purple">
                    Buy now
                  </Button>
                  <Button variant="outline" colorScheme="purple">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        <Pagination
          items={data}
          pageLimit={pageLimit}
          setPageItems={setCourselist}
        />
      </Container>
    </>
  );
};

export default CourseCardList;
