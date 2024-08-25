import {userPageStyles} from "../../styles/pages/UserPageStyles";
import {Text, View} from "react-native";
import ProfileButton from "./ProfileButton";
import {useNavigation} from "@react-navigation/native";

const UserDashboard = () => {
    const navigation = useNavigation();

    const handleEmergencyNumbersButtonPress = () => {
        // @ts-ignore
        navigation.navigate("EmergencyNumbersPage");
    }

    return(
        <View style={userPageStyles.userDashboardContainer}>
            <Text style={userPageStyles.userNameText}>User</Text>
            <ProfileButton
                icon={"build-sharp"}
                color={"orange"}
                onPress={handleEmergencyNumbersButtonPress}
                text={"Edit profile"}
            />
            <ProfileButton
                icon={"mail"}
                color={"orange"}
                onPress={handleEmergencyNumbersButtonPress}
                text={"Invitations"}
            />
            <ProfileButton
                icon={"alert-sharp"}
                color={"purple"}
                onPress={handleEmergencyNumbersButtonPress}
                text={"Emergency"}
            />
        </View>
    );
}

export default UserDashboard;
