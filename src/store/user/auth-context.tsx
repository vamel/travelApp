import {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase/config";
import {parseUserData} from "../../firebase/parseUserData";
import {User} from "../../models/classes/User";

export const AuthContext = createContext(
    {
        token: "",
        isAuthenticated: false,
        uid: "",
        user: null,
        authenticate: (token: string, uid: string) => {},
        logout: () => {},
        getData: (uid: string) => {}
    }
);

const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState("");
    const [userUid, setUserUid] = useState("");
    const [user, setUser] = useState<User>(null);

    const authenticate = (token, uid) => {
        AsyncStorage.setItem("uid", uid);
        SecureStore.setItemAsync("token", token);
        setUserUid(uid);
        setAuthToken(token);
    }

    const logout = () => {
        setAuthToken(null);
        setUserUid("");
        setUser(null);
        SecureStore.deleteItemAsync("token");
        AsyncStorage.removeItem("uid");
    }

    const getData = async (uid: string) => {
        const userRef = doc(db, "users", uid);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();
        setUser(parseUserData(userData));
    }

    const value = {
        token: authToken,
        uid: userUid,
        isAuthenticated: !!authToken,
        user: user,
        authenticate: authenticate,
        logout: logout,
        getData: getData
    }

    //@ts-ignore
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
