import {View} from "react-native";
import {userPageStyles} from "../../styles/pages/userPageStyles";
import ProfileButton from "./ProfileButton";

const ProfileOptionsDashboard = (props) => {
    const handleSignOutButton = () => {
        props.authCtx.logout();
        props.navigation.navigate("SignInPage");
    }

    return(
        <View style={userPageStyles.signOutContainer}>
            <ProfileButton
                icon={"build-sharp"}
                color={"orange"}
                onPress={() => console.log("Edit profile")}
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
