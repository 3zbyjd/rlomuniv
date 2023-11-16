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

function CourseCard() {
  return (
    <>
      <Container maxWidth="container.xl">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          <Card maxW="xs">
            <CardBody>
              <Image
                src="/assets/img/course_logos/code_screen.jpg"
                alt="python course logo"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Learn to code python</Heading>
                <Text>Learn to code in python by building a web scraper.</Text>
                <Text color="blue.600" fontSize="2xl">
                  $25
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
          <Card maxW="xs">
            <CardBody>
              <Image
                src="/assets/img/course_logos/code_screen2.jpg"
                alt="react code logo"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Learn react </Heading>
                <Text>
                  Learn to build responsive web applications with react.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $20
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
          <Card maxW="xs">
            <CardBody>
              <Image
                src="/assets/img/course_logos/fitness1.jpg"
                alt="fitness1 Logo"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Get in shape and stay in shape</Heading>
                <Text>
                  Learn to use nothing but bodyweight to get in shape. Learn
                  receipies that will fuel fat burnig
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $40
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
          <Card maxW="xs">
            <CardBody>
              <Image
                src="/assets/img/course_logos/cross_sm.jpg"
                alt="Welcome Logo"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Welcome to the family</Heading>
                <Text>So, you&apos;ve excepted Christ. Now what?</Text>
                <Text color="blue.600" fontSize="2xl">
                  $50
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
          <Card maxW="xs">
            <CardBody>
              <Image
                src="/assets/img/course_logos/group_coding.jpg"
                alt="git course logo"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  Learn to use git for collaborative coding
                </Heading>
                <Text>
                  Git is a popular code repo. Learn to use it for collaborative
                  coding.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $30
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
          <Card maxW="xs">
            <CardBody>
              <Image
                src="/assets/img/course_logos/business_table.jpg"
                alt="Learn to plan and start your own business"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  Starting a business can be a very daunting task. This course
                  will give you a step by step plan to start your own business.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $35
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
        </SimpleGrid>
      </Container>
    </>
  );
}

export default CourseCard;
