import {
  Box,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  FormLabel,
  Button
} from '@chakra-ui/react';
import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function Login() {
  const initialValues = {
    email: '',
    password: ''
  };

  function onLoginSubmit(values, actions) {
    console.log(values);
  }

  return (
    <Container>
      <Flex width="full" align="center" justifyContent="center" marginTop={20}>
        <Box
          padding={8}
          maxWidth="800px"
          width="800px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box marginY={4} textAlign="left">
            <Formik initialValues={initialValues} onSubmit={onLoginSubmit}>
              {props => (
                <Form>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">Email</FormLabel>
                        <Input {...field} id="email" placeholder="Email" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="senha">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                        marginTop={6}
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          id="password"
                          placeholder="Password"
                          type="password"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    marginTop={4}
                    variant="ruby-outline"
                    isLoading={props.isSubmitting}
                    type="submit"
                    width="full"
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
