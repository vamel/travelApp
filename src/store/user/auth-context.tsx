import {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat";
import User = firebase.User;

export const AuthContext = createContext(
    {
        token: "",
        isAuthenticated: false,
        uid: "",
        authenticate: (token: string, uid: string) => {},
        register: (userData: User) => {},
        logout: () => {}
    }
);

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState("");
    const [userUid, setUserUid] = useState("");

    function authenticate(token, uid) {
        setAuthToken(token);
        setUserUid(uid);
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("uid", uid);
    }

    function logout() {
        setAuthToken(null);
        setUserUid(null);
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("uid");
        AsyncStorage.getItem("uid").then((res) => console.log(res));
    }

    const value = {
        token: authToken,
        uid: userUid,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    //@ts-ignore
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
