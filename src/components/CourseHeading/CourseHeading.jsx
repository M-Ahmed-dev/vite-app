import { Box, Link, Text, useTheme } from "@chakra-ui/react";

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
            <Link key={course} href={courses[course]?.course_link}>
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

export default CourseHeading;
