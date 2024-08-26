import {View, SafeAreaView, ScrollView, Image} from "react-native";
import {userPageStyles} from "../styles/pages/userPageStyles";
import UserDashboard from "../components/userprofile/UserDashboard";
import UserInfo from "../components/userprofile/UserInfo";
import ProfileButton from "../components/userprofile/ProfileButton";

const UserPage = ({navigation}) => {
    const handleSignOutButton = () => {
        navigation.navigate("SignInPage");
    }

    return(
        <SafeAreaView style={userPageStyles.container}>
            <ScrollView>
                <View style={userPageStyles.mainInfoContainer}>
                    <Image source={require("../assets/images/user-placeholder.png")} style={userPageStyles.profilePicture} />
                    <UserDashboard />
                </View>
                <UserInfo/>
                <View style={userPageStyles.signOutContainer}>
                    <ProfileButton
                        icon={"exit-sharp"}
                        color={"red"}
                        onPress={handleSignOutButton}
                        text={"Sign out"}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default UserPage;
