import {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase/config";
import {getFullUserData} from "../../firebase/parseUserData";
import {UserDTO} from "../../models/classes/UserDTO";
import {getCurrentPositionAsync} from "expo-location";
import {getCity} from "../../firebase/location";

export const AuthContext = createContext(
    {
        token: "",
        isAuthenticated: false,
        uid: "",
        user: null,
        location: "",
        authenticate: (token: string, uid: string) => {},
        logout: () => {},
        getData: (uid: string) => {}
    }
);

const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState("");
    const [userUid, setUserUid] = useState("");
    const [user, setUser] = useState<UserDTO>();
    const [location, setLocation] = useState("");

    const authenticate = (token, uid) => {
        AsyncStorage.setItem("uid", uid);
        SecureStore.setItemAsync("token", token);
        setAuthToken(token);
        setUserUid(uid);
        getCurrentPositionAsync().then((res) => {
            //@ts-ignore
            getCity(res.coords.latitude, res.coords.longitude)
                .then((res) => {
                    //@ts-ignore
                    const newLocation = res.results[0].address_components[0].long_name.toLowerCase()
                    setLocation(newLocation);
                    const userRef = doc(db, "users", uid);
                    //@ts-ignore
                    updateDoc(userRef, {
                        last_location: newLocation
                    });
                });
        });

    }

    const logout = () => {
        setAuthToken(null);
        setUserUid("");
        setUser(null);
        setLocation("");
        SecureStore.deleteItemAsync("token");
        AsyncStorage.removeItem("uid");
    }

    const getData = async (uid: string) => {
        const userRef = doc(db, "users", uid);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();
        setUser(getFullUserData({...userData, last_location: location}));
    }

    const value = {
        token: authToken,
        uid: userUid,
        isAuthenticated: !!authToken,
        user: user,
        location: location,
        authenticate: authenticate,
        logout: logout,
        getData: getData
    }

    //@ts-ignore
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
