import {View, SafeAreaView, ScrollView, Image} from "react-native";
import {userPageStyles} from "../styles/pages/userPageStyles";
import UserDashboard from "../components/userprofile/UserDashboard";
import UserInfo from "../components/userprofile/UserInfo";
import ProfileButton from "../components/userprofile/ProfileButton";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/user/auth-context";
import {collection, query, where, documentId, getDocs, limit} from "firebase/firestore";
import {db} from "../firebase/config";
import * as SplashScreen from 'expo-splash-screen';
import {User} from "../models/classes/User";
import OtherUserDashboard from "../components/usersnearby/OtherUserDashboard";

SplashScreen.preventAutoHideAsync();

const UserPage = ({navigation, route}) => {
    const [userUid, setUserUid] = useState("");
    const [userData, setUserData] = useState<User>(null);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setUserUid(route.params.userUid);
        if (route.params.userUid === authCtx.uid) {
            setUserData(authCtx.user);
        } else {
            const getUserData = async () => {
                const userRef = collection(db, "users");
                const q = query(userRef, where(documentId(), "==", route.params.userUid), limit(1));
                const querySnapshot = await getDocs(q);
                const userData = querySnapshot.docs[0].data();
                const user = new User(authCtx.uid, userData.username, userData.bio,
                    userData.place_of_origin, userData.firstname, userData.favourite_city, [], userData.email,
                    userData.birthdate, userData.instagram, userData.hobbies, userData.languages, userData.countries, "");
                setUserData(user);
            }
            getUserData();
        }
    }, [route.params.userUid])

    const onLayoutRootView = useCallback(async () => {
        if (userData) {
            await SplashScreen.hideAsync();
        }
    }, [userData]);

    if (!userData) {
        return null;
    }

    const handleSignOutButton = () => {
        authCtx.logout();
        navigation.navigate("SignInPage");
    }

    const renderDashboard = () => {
        if (route.params.userUid === authCtx.uid) {
            return <UserDashboard username={userData.username} />;
        } else {
            return <OtherUserDashboard username={userData.username} />;
        }
    }

    const renderProfileOptions = () => {
        if (route.params.userUid === authCtx.uid) {
            return(
                <View style={userPageStyles.signOutContainer}>
                    <ProfileButton
                        icon={"exit-sharp"}
                        color={"red"}
                        onPress={handleSignOutButton}
                        text={"Sign out"}
                    />
                    <ProfileButton
                        icon={"trash"}
                        color={"red"}
                        onPress={() => console.log("deleted account")}
                        text={"Delete account"}
                    />
                </View>
            );
        }
        return null;
    }

    return(
        <SafeAreaView style={userPageStyles.container} onLayout={onLayoutRootView}>
            <ScrollView>
                <View style={userPageStyles.mainInfoContainer}>
                    <Image source={require("../assets/images/user-placeholder.png")} style={userPageStyles.profilePicture} />
                    {renderDashboard()}
                </View>
                <UserInfo userInfo={userData} />
                {renderProfileOptions()}
            </ScrollView>
        </SafeAreaView>
    );
}

export default UserPage;
