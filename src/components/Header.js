import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Text
            fontSize="3xl"
            letterSpacing={'-.1rem'}
            color="ruby"
            fontWeight="bold"
          >
            My Bookshelf
          </Text>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button variant="ruby-solid" mr={4}>
          <Link to="/login">Login</Link>
        </Button>

        <Button variant="ruby-outline">
          <Link to="/register">Register</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
