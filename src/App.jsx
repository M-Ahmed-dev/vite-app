import { Box } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import CourseHeading from "./components/CourseHeading/CourseHeading";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import UserDetails from "./components/UserDetails";
import { useVerification } from "./hooks/useVerification";

function App() {
  const { data, isLoading } = useVerification();
  console.log("APiData", data);

  const queryClient = useQueryClient();

  queryClient.removeQueries({ queryKey: "verification-url" });

  return (
    <>
      {" "}
      <Navbar />
      <Box maxWidth="1000px" margin="0 auto" padding="37px 40px">
        <CourseHeading courses={data?.courses} />
        <UserDetails
          loginUrl={data?.priima_login}
          userDetails={data?.userDetails}
          isLoading={isLoading}
        />
      </Box>
      <Footer />
    </>
  );
}

export default App;
