import { Box } from "@chakra-ui/react";
import CourseHeading from "./components/CourseHeading/CourseHeading";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import UserDetails from "./components/UserDetails";
import { useVerification } from "./hooks/useVerification";

function App() {
  const { data, isLoading } = useVerification();

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Navbar siteLogo={data.site_logo_link} siteName={data.site_name} />
      <Box maxWidth="1000px" margin="0 auto" padding="37px 40px">
        <CourseHeading courses={data?.courses} />
        <UserDetails
          loginUrl={data?.priima_login}
          userDetails={data?.user_details}
          isLoading={isLoading}
        />
      </Box>
      <Footer />
    </>
  );
}

export default App;
