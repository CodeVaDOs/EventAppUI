// components/EventsListPage.js
import {
    Box,
    Button,
    Center,
    Checkbox,
    Divider,
    Flex,
    Heading,
    HStack,
    Input,
    Select,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const EventListPage = () => {
    const navigate = useNavigate()
    // Sample event data
    const events = [
        {
            id: 1,
            title: "Tech Innovators Meetup",
            date: "2024-11-15",
            location: "Tech Hub, Innovation Drive",
            category: "Technology",
        },
        {
            id: 2,
            title: "Art & Culture Exhibition",
            date: "2024-12-01",
            location: "City Gallery",
            category: "Art",
        },
        {
            id: 3,
            title: "Health & Wellness Workshop",
            date: "2024-10-20",
            location: "Wellness Center",
            category: "Health",
        },
        // Add more events as needed
    ];

    const [selectedCategory, setSelectedCategory] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleFilter = (event) => {
        return (
            (!selectedCategory || event.category === selectedCategory) &&
            (!startDate || new Date(event.date) >= new Date(startDate)) &&
            (!endDate || new Date(event.date) <= new Date(endDate))
        );
    };

    return (
        <Center py={6}>
            <Box maxW="800px" w="full" bg="white" boxShadow="md" rounded="lg" p={6}>
                <Heading fontSize="2xl" mb={6} textAlign="center">
                    Events
                </Heading>

                {/* Filter Section */}
                <VStack spacing={4} align="start" mb={8}>
                    <Text fontSize="lg" fontWeight="bold">
                        Filter Events
                    </Text>
                    <Select
                        placeholder="Select Category"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="Technology">Technology</option>
                        <option value="Art">Art</option>
                        <option value="Health">Health</option>
                        {/* Add more categories as needed */}
                    </Select>

                    <HStack spacing={4}>
                        <Input
                            type="date"
                            placeholder="Start Date"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <Input
                            type="date"
                            placeholder="End Date"
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </HStack>
                </VStack>

                <Divider mb={8} />

                {/* Events List */}
                <VStack spacing={6} align="start">
                    {events.filter(handleFilter).map((event) => (
                        <Box
                            key={event.id}
                            w="full"
                            p={4}
                            bg="gray.50"
                            rounded="md"
                            boxShadow="sm"
                            onClick={() => navigate(`/event/${event.id}`)}
                        >
                            <Heading fontSize="lg">{event.title}</Heading>
                            <Text fontSize="sm" color="gray.600" mb={1}>
                                Date: {new Date(event.date).toLocaleDateString()}
                            </Text>
                            <Text fontSize="sm" color="gray.600" mb={1}>
                                Location: {event.location}
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                Category: {event.category}
                            </Text>
                        </Box>
                    ))}
                    {events.filter(handleFilter).length === 0 && (
                        <Text fontSize="md" color="gray.500">
                            No events match your criteria.
                        </Text>
                    )}
                </VStack>
            </Box>
        </Center>
    );
};
