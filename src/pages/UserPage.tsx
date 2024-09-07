import {View, SafeAreaView, ScrollView, Image} from "react-native";
import {userPageStyles} from "../styles/pages/userPageStyles";
import UserDashboard from "../components/userprofile/UserDashboard";
import UserInfo from "../components/userprofile/UserInfo";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/user/auth-context";
import * as SplashScreen from 'expo-splash-screen';
import {User} from "../models/classes/User";
import {parseUserData} from "../firebase/parseUserData";
import ProfileOptionsDashboard from "../components/userprofile/ProfileOptionsDashboard";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../firebase/config";

SplashScreen.preventAutoHideAsync();

const UserPage = ({navigation}) => {
    const [userData, setUserData] = useState<User>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setUserData(parseUserData(authCtx.user));

        const getImage = async () => {
            const gsReference = ref(storage, (authCtx.user.profile_picture_url));
            await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
        }

        if (authCtx.user.profile_picture_url) {
            getImage();
        }
    }, [authCtx.user]);

    const onLayoutRootView = useCallback(async () => {
        if (userData) {
            await SplashScreen.hideAsync();
        }
    }, [userData]);

    if (!userData) {
        return null;
    }

    return(
        <SafeAreaView style={userPageStyles.container} onLayout={onLayoutRootView}>
            <ScrollView>
                <View style={userPageStyles.mainInfoContainer}>
                    <Image
                        source={imageUrl ? {uri: imageUrl} : require("../assets/images/user-placeholder.png")}
                        style={userPageStyles.profilePicture}
                    />
                    <UserDashboard username={userData.username}/>
                </View>
                <UserInfo userInfo={userData} />
                <ProfileOptionsDashboard authCtx={authCtx} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default UserPage;
