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
    {
      id: 7,
      imageName: "Prayer Logo 1",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "When You Pray",
      courseDescription: "A Study of 6 Prayers in the Bible",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 8,
      imageName: "Prayer Logo 2",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "21 Laws of Christian Leadership",
      courseDescription: "21 Laws of Christian Leadership",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 9,
      imageName: "Prayer Logo 3",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Finding Your Purpose",
      courseDescription: "Finding Your Purpose",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 10,
      imageName: "Prayer Logo 4",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "God Gave Gifts to the Church",
      courseDescription: "God Gave Gifts to the Church",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 11,
      imageName: "Prayer Logo 5",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Strengthening Your Faith",
      courseDescription: "Strengthening Your Faith",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 12,
      imageName: "Prayer Logo 5",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Choosing to Live for Christ Daily",
      courseDescription: "Choosing to Live for Christ Daily",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 13,
      imageName: "Prayer Logo 5",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Hearing God's Voice Over the Background Noise",
      courseDescription: "Hearing God's Voice Over the Background Noise",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 14,
      imageName: "Prayer Logo 6",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Hearing God's Voice Over the Background Noise",
      courseDescription: "Battlefield Of The Mind 2-in-1, Book and Study Guide",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 15,
      imageName: "Prayer Logo 7",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Fundamentals of the Faith",
      courseDescription: "Fundamentals of the Faith: 13 Lessons to Grow in the Grace & Knowledge of Jesus Christ",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 16,
      imageName: "Prayer Logo 8",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Living as an Overcomer",
      courseDescription: "Living as an Overcomer: Eternal Motivation for Earthly Success",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 17,
      imageName: "Prayer Logo 9",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Revelation",
      courseDescription: "Revelation: The Christian's Ultimate Victory",
      formattedCoursePrice: "$24.99"
    },
    {
      id: 18,
      imageName: "Prayer Logo 10",
      imageSrc: "/assets/img/course_logos/prayer_1065977915.jpg",
      courseHeading: "Romans",
      courseDescription: "Romans, MacArthur Bible Studies",
      formattedCoursePrice: "$24.99"
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
