import {View} from "react-native";
import {userPageStyles} from "../../styles/pages/userPageStyles";
import ProfileButton from "./ProfileButton";
import {useContext} from "react";
import {AuthContext} from "../../store/user/auth-context";
import {useNavigation} from "@react-navigation/native";
import {handleSignOut} from "../../firebase/auth";

const ProfileOptionsDashboard = () => {
    const authCtx = useContext(AuthContext);
    const navigation = useNavigation();

    const handleEditProfileButton = () => {
        //@ts-ignore
        navigation.navigate("EditProfilePage");
    }

    const handleSignOutButton = async () => {
        await handleSignOut();
        //@ts-ignore
        navigation.navigate("SignInPage");
        authCtx.logout();
    }

    const handleDeleteButton = () => {
        //@ts-ignore
        navigation.navigate("SignInPage");
        authCtx.deleteAccount();
    }

    return(
        <>
            <View style={userPageStyles.signOutContainer}>
                <ProfileButton
                    icon={"build-sharp"}
                    color={"orange"}
                    onPress={handleEditProfileButton}
                    text={"Edit profile"}
                />
                <ProfileButton
                    icon={"exit-sharp"}
                    color={"red"}
                    onPress={handleSignOutButton}
                    text={"Sign out"}
                />
            </View>
            <View style={userPageStyles.signOutContainer}>
                <ProfileButton
                    icon={"trash"}
                    color={"red"}
                    onPress={handleDeleteButton}
                    text={"Delete account"}
                />
            </View>
        </>
    );
}

export default ProfileOptionsDashboard;
