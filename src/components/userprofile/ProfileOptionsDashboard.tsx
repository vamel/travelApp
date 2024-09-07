import {View} from "react-native";
import {userPageStyles} from "../../styles/pages/userPageStyles";
import ProfileButton from "./ProfileButton";

const ProfileOptionsDashboard = (props) => {
    const handleEditProfileButton = () => {
        props.navigation.navigate("EditProfilePage");
    }

    const handleSignOutButton = () => {
        props.navigation.navigate("SignInPage");
        props.authCtx.logout();
    }

    return(
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
            {/*<ProfileButton*/}
            {/*    icon={"trash"}*/}
            {/*    color={"red"}*/}
            {/*    onPress={() => console.log("deleted account")}*/}
            {/*    text={"Delete account"}*/}
            {/*/>*/}
        </View>
    );
}

export default ProfileOptionsDashboard;
