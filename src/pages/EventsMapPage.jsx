// components/EventsMapPage.js
import {
    Box,
    Center,
    Heading,
    Text,
} from "@chakra-ui/react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'

// Example event data in Nederlands with coordinates in the Netherlands
const events = [
    {
        id: 1,
        title: "Tech Innovators Meetup",
        date: "15 november 2024",
        location: "Tech Hub, Amsterdam",
        coordinates: [52.3676, 4.9041], // Amsterdam
    },
    {
        id: 2,
        title: "Kunst & Cultuur Tentoonstelling",
        date: "1 december 2024",
        location: "Stedelijk Museum, Amsterdam",
        coordinates: [52.3584, 4.8811], // Amsterdam
    },
    {
        id: 3,
        title: "Gezondheid & Welzijn Workshop",
        date: "20 oktober 2024",
        location: "Wellness Centrum, Utrecht",
        coordinates: [52.0907, 5.1214], // Utrecht
    },
    {
        id: 4,
        title: "Food Festival",
        date: "10 november 2024",
        location: "Rotterdam",
        coordinates: [51.9225, 4.4792], // Rotterdam
    },
    {
        id: 5,
        title: "Sportevenement",
        date: "5 december 2024",
        location: "Feyenoord Stadion, Rotterdam",
        coordinates: [51.9225, 4.4949], // Rotterdam
    },
    {
        id: 6,
        title: "Boekenbeurs",
        date: "25 oktober 2024",
        location: "Utrecht",
        coordinates: [52.0907, 5.1214], // Utrecht
    },
    {
        id: 7,
        title: "Technologie Conferentie",
        date: "15 januari 2025",
        location: "Den Haag",
        coordinates: [52.0786, 4.2881], // Den Haag
    },
    {
        id: 8,
        title: "Zomer Muziekfestival",
        date: "15 juni 2025",
        location: "Amsterdam",
        coordinates: [52.3676, 4.9041], // Amsterdam
    },
    {
        id: 9,
        title: "Film Festival",
        date: "20 maart 2025",
        location: "Utrecht",
        coordinates: [52.0907, 5.1214], // Utrecht
    },
    {
        id: 10,
        title: "Wetenschap & Innovatie Dag",
        date: "8 februari 2025",
        location: "Eindhoven",
        coordinates: [51.4416, 5.4697], // Eindhoven
    },
    {
        id: 11,
        title: "Kunst Markten",
        date: "3 oktober 2024",
        location: "Leiden",
        coordinates: [52.1601, 4.4983], // Leiden
    },
    {
        id: 12,
        title: "Historische Beurs",
        date: "12 november 2024",
        location: "Delft",
        coordinates: [52.0116, 4.3572], // Delft
    },
    {
        id: 13,
        title: "Reis Expo",
        date: "7 januari 2025",
        location: "Amsterdam",
        coordinates: [52.3676, 4.9041], // Amsterdam
    },
    {
        id: 14,
        title: "Vrouwen in Technologie Event",
        date: "18 maart 2025",
        location: "Nijmegen",
        coordinates: [51.8421, 5.8747], // Nijmegen
    },
    {
        id: 15,
        title: "Moderne Kunst Tentoonstelling",
        date: "11 april 2025",
        location: "Rotterdam",
        coordinates: [51.9225, 4.4792], // Rotterdam
    },
    {
        id: 16,
        title: "Eten & Drinken Festival",
        date: "29 mei 2025",
        location: "Haarlem",
        coordinates: [52.3874, 4.6462], // Haarlem
    },
    {
        id: 17,
        title: "Tech Startups Event",
        date: "22 februari 2025",
        location: "Groningen",
        coordinates: [53.2194, 6.5665], // Groningen
    },
    {
        id: 18,
        title: "Bioscoopavond",
        date: "10 januari 2025",
        location: "Utrecht",
        coordinates: [52.0907, 5.1214], // Utrecht
    },
    {
        id: 19,
        title: "Herfst Festival",
        date: "15 oktober 2024",
        location: "Eindhoven",
        coordinates: [51.4416, 5.4697], // Eindhoven
    },
    {
        id: 20,
        title: "Familiedag in het Park",
        date: "30 augustus 2025",
        location: "Amstelveen",
        coordinates: [52.3087, 4.8695], // Amstelveen
    },
];

// Fix default marker icon issue
const DefaultIcon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export const EventsMapPage = () => {
    return (
        <Center>
            <Box position="relative" w="100%" h="calc(100vh - 74px)"> {/* Full height */}
                <MapContainer
                    center={[52.3738, 4.8909]} // Centered on Amsterdam
                    zoom={7}
                    style={{ height: "100%", width: "100%" }} // Full screen
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Non-satellite tiles
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {events.map((event) => (
                        <Marker key={event.id} position={event.coordinates}>
                            <Popup>
                                <Heading size="sm">{event.title}</Heading>
                                <Text fontSize="sm">Datum: {event.date}</Text>
                                <Text fontSize="sm">Locatie: {event.location}</Text>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Box>
        </Center>
    );
};

