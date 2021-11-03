import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import Head from 'next/head';

export const Home = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Next Chakra | Boilerplate</title>
      </Head>
      <Flex
        flexDir="column"
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
      >
        <Button colorScheme="pink">Next Chakra</Button>
      </Flex>
    </Flex>
  );
};
