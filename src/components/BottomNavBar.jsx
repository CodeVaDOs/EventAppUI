// components/BottomNavBar.js
import {Box, Flex, IconButton, Text} from "@chakra-ui/react";
import {FaCalendarAlt, FaMap, FaUser} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export const BottomNavBar = () => {
    const navigate = useNavigate();

    const navItems = [
        {label: "Map", icon: FaMap, path: "/"},
        {label: "Profile", icon: FaUser, path: "/profile"},
        {label: "Events", icon: FaCalendarAlt, path: "/events"},
    ];

    return (
        <Box
            position="fixed"
            bottom="0"
            width="100%"
            bg="white"
            boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
            zIndex="10"
        >
            <Flex justify="space-around" p={2}>
                {navItems.map((item) => (
                    <Flex
                        key={item.label}
                        direction="column"
                        align="center"
                        as="button"
                        onClick={() => navigate(item.path)}
                    >
                        <IconButton
                            aria-label={item.label}
                            icon={<item.icon/>}
                            fontSize="24px"
                            variant="ghost"
                            color="gray.600"
                        />
                        <Text fontSize="xs" color="gray.600">
                            {item.label}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

