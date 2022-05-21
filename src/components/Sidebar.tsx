import Icon from "@chakra-ui/icon";
import { Box, Link, Stack, Text, HStack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GENERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link  >
            <HStack display="flex" align="center"> 
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </HStack>
            </Link>
            <Link >
            <HStack display="flex" align="center"> 
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Users</Text>
              </HStack>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMATION</Text>
          <Stack spacing="4" mt="8" align="stretch">
          
            <Link  >
                <HStack display="flex" align="center"> 
                <Icon as={RiInputMethodLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">Forms</Text>
              </HStack>
            </Link>
            

            
            <Link  >
            <HStack display="flex" align="center"> 
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Automation</Text>
              </HStack>
            </Link>
            
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}