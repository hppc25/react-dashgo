import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Helder Correia</Text>
      <Text
        color="gray.300"
        fontSize="small"
      >
        helder@gmail.com
      </Text>
    </Box>

    <Avatar size="md" name="Helder Correia" src="https://github.com/hppc25.png" />          
  </Flex>
  );
}