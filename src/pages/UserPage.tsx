import {View, SafeAreaView, ScrollView, Image} from "react-native";
import {userPageStyles} from "../styles/pages/UserPageStyles";
import UserDashboard from "../components/userprofile/UserDashboard";
import UserInfo from "../components/userprofile/UserInfo";

const UserPage = () => {
    return(
        <SafeAreaView style={userPageStyles.container}>
            <ScrollView>
                <View style={userPageStyles.mainInfoContainer}>
                    <Image source={require("../assets/images/user_pic.png")} style={userPageStyles.profilePicture} />
                    <UserDashboard />
                </View>
                <UserInfo/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default UserPage;
