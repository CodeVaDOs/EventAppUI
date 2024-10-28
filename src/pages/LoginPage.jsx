// components/LoginForm.js
import {Box, Button, Checkbox, Flex, Input, Stack, Text, useColorModeValue} from '@chakra-ui/react';
import { useState } from 'react';
import {FormControl, FormLabel} from "@chakra-ui/form-control";
import {useAuth} from "../hooks/useAuth.jsx";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Handle login logic here
        if (email && password) {
            await login({ email })
        }
    };

    return (
        <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                    <Text fontSize="4xl">Sign in to your account</Text>
                </Stack>
                <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleLogin}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl sx={{my: 5}} id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <Stack spacing={5}>
                                <Checkbox>Remember me</Checkbox>
                                <Button
                                    type="submit"
                                    bg="blue.400"
                                    color="white"
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

