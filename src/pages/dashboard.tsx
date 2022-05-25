import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import {options, series} from "../../utils/chartData";
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});


export default function Dashboard() {
  return(
    <Flex direction="column" h="100vh" >
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4"  minChildWidth="320px" alignItems="flex-start">
          <Box
            p={["6","8"]}
            bg="gray.800"
            borderRadius="8"
            pb="4"
          >
            <Text fontSize="large" mb="4">Subscribers of the week</Text>
            <Chart type="area" options={options} series={series} height={160}  />
          </Box>
          <Box
            p={["6","8"]}
            bg="gray.800"
            borderRadius="8"
          >
            <Text fontSize="large" mb="4">Open rate</Text>
            <Chart type="area" options={options} series={series} height={160}  />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
     
  );
}