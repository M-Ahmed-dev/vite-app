import { Box, Link, Text, useTheme } from "@chakra-ui/react";
import PropTypes from "prop-types"; // Import PropTypes

const CourseHeading = ({ courses }) => {
  const theme = useTheme();

  return (
    <Box>
      <Text sx={theme.fonts.secondary} fontSize="24px">
        Customizable default message from priima settings!
      </Text>

      <Box mt="37px">
        <Text sx={theme.fonts.secondary}>You have been added to courses:</Text>

        <>
          {Object.keys(courses)?.map((course) => (
            <Link
              target="_blank"
              key={course}
              href={courses[course]?.course_link}
            >
              <Text sx={theme.fonts.primary}>
                {courses[course]?.name} ({courses[course]?.description})
              </Text>
            </Link>
          ))}
        </>
      </Box>
    </Box>
  );
};

CourseHeading.propTypes = {
  courses: PropTypes.object, // You can define a more specific PropTypes shape here if needed
};

export default CourseHeading;
