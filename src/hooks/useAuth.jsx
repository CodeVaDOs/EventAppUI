import {useLocalStorage} from "./useLocalStorage.js";
import {useNavigate} from "react-router-dom";
import {createContext, useContext, useMemo} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('user', null)
    const navigate = useNavigate()
    const login = async (data) => {
        setUser(data);
        navigate("/profile");
    };

    const logout = () => {
        setUser(null);
        navigate("/login", {replace: true});
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
