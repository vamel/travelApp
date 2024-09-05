import {View, SafeAreaView, ScrollView, Image} from "react-native";
import {userPageStyles} from "../styles/pages/userPageStyles";
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

const OtherUserPage = ({navigation, route}) => {
    const [userData, setUserData] = useState<User>(null);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
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
    }, [route.params.userUid])

    const onLayoutRootView = useCallback(async () => {
        if (userData) {
            await SplashScreen.hideAsync();
        }
    }, [userData]);

    if (!userData) {
        return null;
    }

    const handleGoBackButton = () => {
        navigation.navigate("UsersNearbyPage");
    }

    return(
        <SafeAreaView style={userPageStyles.container} onLayout={onLayoutRootView}>
            <ScrollView>
                <View style={userPageStyles.mainInfoContainer}>
                    <Image source={require("../assets/images/user-placeholder.png")} style={userPageStyles.profilePicture} />
                    <OtherUserDashboard username={userData.username} />
                </View>
                <UserInfo userInfo={userData} />
                <View style={userPageStyles.signOutContainer}>
                    <ProfileButton
                        icon={"return-up-back"}
                        color={"red"}
                        onPress={handleGoBackButton}
                        text={"Go back"}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default OtherUserPage;
