import {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';
import {
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    collection,
    query,
    where,
    documentId,
    orderBy,
    getDocs
} from "firebase/firestore";
import {auth, db} from "../../firebase/config";
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
        setLocationWithoutAuth: () => {Promise<boolean>},
        logout: () => {},
        getData: (uid: string) => {},
        deleteAccount: () => {}
    }
);

const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState("");
    const [userUid, setUserUid] = useState("");
    const [user, setUser] = useState<UserDTO>(null);
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

    const setLocationWithoutAuth = async () => {
        return new Promise((resolve) => {
            getCurrentPositionAsync().then((res) => {
                //@ts-ignore
                getCity(res.coords.latitude, res.coords.longitude)
                    .then((res) => {
                        //@ts-ignore
                        const newLocation = res.results[0].address_components[0].long_name.toLowerCase()
                        setLocation(newLocation);
                    });
            });
        resolve(true)});
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

    const deleteAccount = async () => {
        const deleteDocument = async (docId) => {
            await deleteDoc(doc(db, "invitations", docId));
        }

        let userInvitations = [];
        const invRef = collection(db, "invitations");

        if (user.invitations_received.length > 0) {
            const queryReceived = query(invRef, where(documentId(), "in", user.invitations_received));
            const querySnapshotReceived = await getDocs(queryReceived);
            userInvitations = [...querySnapshotReceived.docs
                .map((doc) => doc.id), ...userInvitations];
        }

        if (user.invitations_sent.length > 0) {
            const querySent = query(invRef, where(documentId(), "in", user.invitations_sent));
            const querySnapshotSent = await getDocs(querySent);
            userInvitations = [...querySnapshotSent.docs.map((doc) => doc.id), ...userInvitations];
        }

        if (userInvitations.length > 0) {
            userInvitations.forEach((docId) => deleteDocument(docId));
        }

        deleteDoc(doc(db, "users", userUid));
        deleteDoc(doc(db, "usernames", user.username));

        auth.currentUser?.delete().then(() => {
            logout();
        });
    }

    const value = {
        token: authToken,
        uid: userUid,
        isAuthenticated: !!authToken,
        user: user,
        location: location,
        authenticate: authenticate,
        setLocationWithoutAuth: setLocationWithoutAuth,
        logout: logout,
        getData: getData,
        deleteAccount: deleteAccount
    }

    //@ts-ignore
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
