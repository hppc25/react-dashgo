import { useEffect } from "react";
import Link from "next/link";
import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from 'react-query';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import useSSR from '../../hooks/useSSR';
import { api } from "../../services/api";

export default function UserList() {

  const [isSSR] = useSSR();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { data, isLoading, error, isFetching } = useQuery('users', async () => {
    const { data } = await api.get('/users');

    const users = data.users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }));

    return users;
  });


  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              <span>Users</span>
              { !isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4"/>
              ) }
              </Heading>
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

          { isLoading ? (
            <Flex py="5" justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex py="5" justify="center">
              <Text>Error to get user data. Please try again later.</Text>
            </Flex>
          ) : (
            <>
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
     
            { data.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="small" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      { isWideVersion && (
                        <Td>
                          {user.createdAt}
                        </Td>
                      )}
                      { isWideVersion && (
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
                  )) }
            </Tbody>
          </Table>
          <Pagination />
          </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}