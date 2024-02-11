// import {
//   Button,
//   ButtonGroup,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Heading,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
//   Container,
// } from "@chakra-ui/react";
import Pagination from "./pagination";
import data from "../../public/assets/course_catalog.json";
import { useState } from "react";

// interface CourseProp {
//   id: number;
//   imageName: string;
//   imageSrc: string;
//   courseHeading: string;
//   courseDescription: string;
//   formattedCoursePrice: number;
// }

const CourseCardList = () => {
  const pageLimit = 8;
  const [courseList, setCourselist] = useState([]);

  return (
    <>
      {/* <Container maxWidth="container.xl">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {courseList.map((course) => (
            <Card maxW="xs" key={course}>
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
        <Pagination
          items={data}
          pageLimit = {pageLimit}
          setPageItems = {setCourselist}
        />
      </Container> */}
      {courseList.map((course) => console.log(course))}
      <div>
        <ul>
          {courseList.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
        <Pagination
          items={data}
          pageLimit={pageLimit}
          setPageItems={setCourselist}
        />
      </div>
    </>
  );
};

export default CourseCardList;
