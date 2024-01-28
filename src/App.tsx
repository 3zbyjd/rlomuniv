import CourseCardList from "./components/CourseCard";
import SiteHeader from "./components/SiteHeader";

function App() {
  const courses = [
    {
      id: 1,
      imageName: "python course logo",
      imageSrc: "/assets/img/course_logos/code_screen.jpg",
      courseHeading: "Learn to code python",
      courseDescription: "Learn to code in python by building a web scraper.",
      formattedCoursePrice: "$25"
    },
    {
      id: 2,
      imageName: "react code logo",
      imageSrc: "/assets/img/course_logos/code_screen2.jpg",
      courseHeading: "Learn react ",
      courseDescription: "Learn to build responsive web applications with react.",
      formattedCoursePrice: "$20"
    },
    {
      id: 3,
      imageName: "fitness1 Logo",
      imageSrc: "/assets/img/course_logos/fitness1.jpg",
      courseHeading: "Get in shape and stay in shape",
      courseDescription: "Learn to use nothing but bodyweight to get in shape. Learn receipies that will fuel fat burning",
      formattedCoursePrice: "$40"
    },
    {
      id: 4,
      imageName: "Welcome Logo",
      imageSrc: "/assets/img/course_logos/cross_sm.jpg",
      courseHeading: "Welcome to the family",
      courseDescription: "So, you've excepted Christ. Now what?",
      formattedCoursePrice: "$50"
    },
    {
      id: 5,
      imageName: "git course logo",
      imageSrc: "/assets/img/course_logos/group_coding.jpg",
      courseHeading: "Learn to use git for collaborative coding",
      courseDescription: "Git is a popular code repo. Learn to use it for collaborative coding.",
      formattedCoursePrice: "$30"
    },
    {
      id: 6,
      imageName: "Learn to plan and start your own business",
      imageSrc: "/assets/img/course_logos/business_table.jpg",
      courseHeading: "Living room Sofa",
      courseDescription: "Starting a business can be a very daunting task. This course will give you a step by step plan to start your own business.",
      formattedCoursePrice: "$65"
    },
  ]

  return (
    <>
      <SiteHeader />
      <CourseCardList courses={courses} />
    </>
  );
}

export default App;
