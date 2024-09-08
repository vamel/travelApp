import {View, SafeAreaView, ScrollView, Image} from "react-native";
import {userPageStyles} from "../styles/pages/userPageStyles";
import UserInfo from "../components/userprofile/UserInfo";
import ProfileButton from "../components/userprofile/ProfileButton";
import {useCallback, useEffect, useState} from "react";
import {collection, query, where, documentId, getDocs, limit} from "firebase/firestore";
import {db, storage} from "../firebase/config";
import * as SplashScreen from 'expo-splash-screen';
import {User} from "../models/classes/User";
import OtherUserDashboard from "../components/usersnearby/OtherUserDashboard";
import {getDownloadURL, ref} from "firebase/storage";

SplashScreen.preventAutoHideAsync();

const OtherUserPage = ({navigation, route}) => {
    const [userData, setUserData] = useState<User>(null);
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        const getUserData = async () => {
            const userRef = collection(db, "users");
            const q = query(userRef, where(documentId(), "==", route.params.userUid), limit(1));
            const querySnapshot = await getDocs(q);
            const userData = querySnapshot.docs[0].data();
            const user = new User(route.params.userUid, userData.username, userData.bio,
                userData.place_of_origin, userData.firstname, userData.favourite_city, [], "",
                userData.birthdate, "", userData.profile_picture_url,
                userData.hobbies, userData.languages, userData.countries, userData.last_location);
            setUserData(user);

            if (userData.profile_picture_url) {
                const gsReference = ref(storage, (userData.profile_picture_url));
                await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
            }
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
                    <Image
                        source={imageUrl ? {uri: imageUrl} : require("../assets/images/user-placeholder.png")}
                        style={userPageStyles.profilePicture}
                    />
                    <OtherUserDashboard username={userData.username} uid={userData.uid} pictureUrl={userData.profile_picture_url} />
                </View>
                <UserInfo userInfo={userData}  location={userData.last_location} />
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
