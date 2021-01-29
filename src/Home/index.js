import React from 'react';
import { Box, Image, Container, Flex, Square, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxWidth="6xl">
      <Flex height="calc(100vh - 88px)">
        <Square flex="1">
          <Box flexDirection="column">
            <Text fontSize="6xl" color="ruby" fontWeight="bold">
              Your readings organized!
            </Text>
            <Text fontSize="2xl" color="onyx" fontWeight="light">
              All your book readings organized in a simple way.
            </Text>
          </Box>
        </Square>
        <Box flex="1" bg="white" marginTop={10}>
          <Image
            src="/landing.png"
            alt="People reading books"
            maxWidth="600px"
            maxHeight="600px"
          />
        </Box>
      </Flex>
      <a href="https://storyset.com/people">Illustration by Freepik Storyset</a>
    </Container>
  );
}
