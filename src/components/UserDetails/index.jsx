/* eslint-disable react/prop-types */
import { Box, Button, Link, Text, useTheme } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const UserDetails = ({ userDetails, loginUrl, isLoading }) => {
  console.log("userDetauls", userDetails);
  const theme = useTheme();

  const gridItems = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  return (
    <>
      <Box
        mt="59px"
        borderRadius="10px"
        // height="598px"
        background="#E6F2F3"
        boxShadow="0px 2px 5px 0px rgba(33, 91, 124, 0.15)"
        padding="50px 130px"
      >
        <Box>
          <Text fontSize="20px" sx={theme.fonts.primary}>
            Information:
          </Text>
        </Box>

        {isLoading ? (
          <Text>Loading User Details</Text>
        ) : (
          <Box display="grid" gridTemplateColumns="auto auto" mt="64px">
            <>
              {Object.entries(userDetails)?.map(([key, value]) => (
                <>
                  <Box key={key} sx={gridItems}>
                    <Box>
                      <Text color={theme.colors.primary} fontWeight="500">
                        {key[value]}
                      </Text>
                      <Text color={theme.colors.primary} fontWeight="300">
                        {/* {userDetails.username?.value} */}
                        {key[value]}
                      </Text>
                    </Box>
                  </Box>
                </>
              ))}

              <Box sx={gridItems}>
                <Box>
                  {Object.entries(userDetails.basic)?.map(([key, item]) => (
                    <React.Fragment key={key}>
                      <Text sx={theme.fonts.secondary}>{item.label}</Text>
                      <Text sx={theme.fonts.secondary}>{item.value}</Text>
                    </React.Fragment>
                  ))}
                </Box>

                <Box>
                  {Object.entries(userDetails.additional)?.map(
                    ([key, item]) => (
                      <React.Fragment key={key}>
                        <Text sx={theme.fonts.secondary}>{item.label}</Text>
                        <Text sx={theme.fonts.secondary}>{item.value}</Text>
                      </React.Fragment>
                    )
                  )}
                </Box>
              </Box>
            </>
            {/* ))} */}
          </Box>
        )}

        <Button
          mt="86px"
          display="flex"
          width="200px"
          color="#FFF"
          background={theme.colors.primary}
        >
          <Link target="_blank" href={login}>
            Login in to Priima
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default UserDetails;
