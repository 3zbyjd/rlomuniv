import { Divider } from "@chakra-ui/react";
import CourseCardList from "../../components/CourseCard";
import SiteHeader from "../../components/SiteHeader";

function App() {
  return (
    <>
      <SiteHeader />
      <Divider orientation="horizontal" bg="#4d4c4c" height="2" />
      <CourseCardList />
    </>
  );
}

export default App;
