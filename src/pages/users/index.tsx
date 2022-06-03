import Link from "next/link";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import useSSR from '../../hooks/useSSR';
import { useEffect } from "react";

export default function UserList() {

  const [isSSR] = useSSR();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                New User
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Users</Th>
                  { !isSSR && isWideVersion && (
                    <>
                     <Th>Registration date</Th>
                     <Th w="8"></Th>
                     </>
                  )}
                
              </Tr>
            </Thead>
            <Tbody>
     
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Helder Correia</Text>
                    <Text fontSize="small" color="gray.300">helder@gmail.com</Text>
                  </Box>
                </Td>
                { !isSSR && isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                {!isSSR && isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="pink"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}