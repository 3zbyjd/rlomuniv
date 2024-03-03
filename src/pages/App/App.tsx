import { Divider } from "@chakra-ui/react";
import CourseCardList from "../../components/CourseCardList";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

function App() {
  return (
    <>
      <SiteHeader />
      <Divider
        orientation="horizontal"
        bg="#4d4c4c"
        height="2"
        marginBottom="25px"
      />
      <CourseCardList />
      <SiteFooter />
    </>
  );
}

export default App;
