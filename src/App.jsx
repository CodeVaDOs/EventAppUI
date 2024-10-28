import {Route, Routes, useLocation} from "react-router-dom";
import {AuthProvider} from "./hooks/useAuth.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {ProtectedRoute} from "./ProtectedRoute.jsx";
import {ProfilePage} from "./pages/ProfilePage.jsx";
import {EventListPage} from "./pages/EventListPage.jsx";
import {BottomNavBar} from "./components/BottomNavBar.jsx";
import {EventPage} from "./pages/EventPage.jsx";
import {EventsMapPage} from "./pages/EventsMapPage.jsx";

function App() {
    const location = useLocation();

    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <EventsMapPage/>
                        </ProtectedRoute>
                    }/>
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/events"
                    element={
                        <ProtectedRoute>
                            <EventListPage/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/event/:id"
                    element={
                        <ProtectedRoute>
                            <EventPage/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
            {!location.pathname.includes("login") && <BottomNavBar/>}
        </AuthProvider>
    )
}

export default App
