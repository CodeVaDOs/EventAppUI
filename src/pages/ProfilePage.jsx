// components/EventProfilePage.js
import {
    Box,
    Center,
    Heading,
    HStack,
    Icon,
    Text,
    VStack,
    Badge, Avatar, Button,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaCheckCircle, FaStar } from 'react-icons/fa';

export const ProfilePage = () => {
    const user = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        avatarUrl: "https://bit.ly/broken-link", // Replace with actual avatar URL
        bio: "Enthusiastic participant in tech and business events. Always eager to learn and connect!",
        interests: ["Technology", "Business", "Networking", "Workshops"],
        upcomingEvents: [
            { name: "Tech Innovators Summit", date: "Nov 15, 2024" },
            { name: "Business Growth Workshop", date: "Dec 10, 2024" },
        ],
        pastEvents: [
            { name: "AI & Robotics Expo", rating: 4 },
            { name: "Startup Pitch Night", rating: 5 },
        ],
    };

    return (
        <Center py={6}>
            <Box
                maxW="500px"
                w="full"
                bg="white"
                boxShadow="2xl"
                rounded="lg"
                p={6}
                textAlign="center"
            >
                <Avatar size="xl" src={user.avatarUrl} mb={4} />
                <Heading fontSize="2xl" fontFamily="body">
                    {user.name}
                </Heading>
                <Text fontWeight={600} mb={4}>
                    {user.email}
                </Text>
                <Text px={3}>
                    {user.bio}
                </Text>

                <Heading fontSize="xl" my={3}>Interests</Heading>
                <HStack spacing={2} justify="center">
                    {user.interests.map((interest) => (
                        <Badge key={interest} px={2} py={1} colorScheme="blue">
                            {interest}
                        </Badge>
                    ))}
                </HStack>


                <Heading fontSize="xl" my={3}>Upcoming Events</Heading>
                <VStack align="start">
                    {user.upcomingEvents.map((event, index) => (
                        <HStack key={index} spacing={2}>
                            <Icon as={FaCalendarAlt} color="blue.500" />
                            <Text fontWeight="bold">{event.name}</Text>
                            <Text fontSize="sm" color="gray.500">
                                {event.date}
                            </Text>
                        </HStack>
                    ))}
                </VStack>


                <Heading fontSize="xl" my={3}>Past Events</Heading>
                <VStack align="start">
                    {user.pastEvents.map((event, index) => (
                        <HStack key={index} spacing={2}>
                            <Icon as={FaCheckCircle} />
                            <Text fontWeight="bold">{event.name}</Text>
                            <HStack spacing={1}>
                                {[...Array(5)].map((_, i) => (
                                    <Icon key={i} as={FaStar} color={i < event.rating ? "yellow.400" : "gray.300"} />
                                ))}
                            </HStack>
                        </HStack>
                    ))}
                </VStack>

                <Button
                    mt={8}
                    w="full"
                    bg="blue.400"
                    _hover={{
                        bg: "blue.500",
                    }}
                >
                    Edit Profile
                </Button>
            </Box>
        </Center>
    );
};

