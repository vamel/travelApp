import {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat";
import * as SecureStore from 'expo-secure-store';
import User = firebase.User;

export const AuthContext = createContext(
    {
        token: "",
        isAuthenticated: false,
        uid: "",
        location: "Warsaw",
        authenticate: (token: string, uid: string) => {},
        logout: () => {}
    }
);

const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState("");
    const [userUid, setUserUid] = useState("");
    const [location, setLocation] = useState("");

    const authenticate = (token, uid) => {
        setAuthToken(token);
        setUserUid(uid);
        SecureStore.setItemAsync("token", token);
        AsyncStorage.setItem("uid", uid);
    }

    const logout = () => {
        setAuthToken(null);
        setUserUid(null);
        SecureStore.deleteItemAsync("token");
        AsyncStorage.removeItem("uid");
    }

    const value = {
        token: authToken,
        uid: userUid,
        isAuthenticated: !!authToken,
        location: "Warsaw",
        authenticate: authenticate,
        logout: logout
    }

    //@ts-ignore
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
