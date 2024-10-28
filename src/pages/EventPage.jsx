// components/EventPage.jsx
import {
    Avatar,
    Box,
    Button,
    Center,
    Divider,
    Heading,
    HStack,
    Icon,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export const EventPage = () => {
    const event = {
        title: "Tech Innovators Meetup",
        description:
            "Join us for an exciting event where top innovators in the tech industry gather to share insights, network, and showcase cutting-edge technology.",
        date: "November 15, 2024",
        time: "10:00 AM - 5:00 PM",
        location: "Tech Hub, 123 Innovation Drive",
        organizer: {
            name: "John Doe",
            role: "Event Organizer",
            avatarUrl: "https://bit.ly/broken-link", // Replace with actual avatar URL
        },
        attendees: [
            { name: "Alice", avatarUrl: "https://bit.ly/broken-link" },
            { name: "Bob", avatarUrl: "https://bit.ly/broken-link" },
        ],
    };

    return (
        <Center py={6}>
            <Box
                maxW="600px"
                w="full"
                bg="white"
                boxShadow="md"
                rounded="lg"
                p={6}
                textAlign="left"
            >
                <Heading fontSize="2xl" mb={4}>
                    {event.title}
                </Heading>

                <Text fontSize="md" color="gray.700" mb={6}>
                    {event.description}
                </Text>

                <HStack mb={4}>
                    <Icon as={FaCalendarAlt} color="blue.500" />
                    <Text>{event.date}</Text>
                </HStack>
                <HStack mb={4}>
                    <Icon as={FaMapMarkerAlt} color="red.500" />
                    <Text>{event.location}</Text>
                </HStack>
                <Text fontWeight="bold" mb={2}>
                    Time: {event.time}
                </Text>

                <Divider my={6} />

                <Heading fontSize="lg" mb={4}>
                    Organizer
                </Heading>
                <HStack spacing={4}>
                    <Avatar src={event.organizer.avatarUrl} />
                    <Box>
                        <Text fontWeight="bold">{event.organizer.name}</Text>
                        <Text fontSize="sm" color="gray.600">
                            {event.organizer.role}
                        </Text>
                    </Box>
                </HStack>

                <Divider my={6} />

                <Heading fontSize="lg" mb={4}>
                    Attendees
                </Heading>
                <HStack spacing={4} wrap="wrap">
                    {event.attendees.map((attendee, index) => (
                        <Avatar key={index} src={attendee.avatarUrl} name={attendee.name} />
                    ))}
                </HStack>

                <Button colorScheme="blue" mt={8} w="full">
                    RSVP
                </Button>
            </Box>
        </Center>
    );
};

