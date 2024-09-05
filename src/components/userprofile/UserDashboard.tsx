import {Text, View} from "react-native";
import ProfileButton from "./ProfileButton";
import {useNavigation} from "@react-navigation/native";
import {userDashboardStyles} from "../../styles/components/userprofile/userDashboardStyles";

interface IUserDashboardProps {
    username: string;
}

const UserDashboard = (props: IUserDashboardProps) => {
    const navigation = useNavigation();

    const handleInvitationsButtonPress = () => {
        // @ts-ignore
        navigation.navigate("InvitationListPage");
    }

    const handleEmergencyNumbersButtonPress = () => {
        // @ts-ignore
        navigation.navigate("EmergencyNumbersPage");
    }

    return(
        <View style={userDashboardStyles.userDashboardContainer}>
            <Text style={userDashboardStyles.userNameText}>{props.username}</Text>
            <ProfileButton
                icon={"star-sharp"}
                color={"orange"}
                onPress={handleEmergencyNumbersButtonPress}
                text={"Favourites"}
            />
            <ProfileButton
                icon={"mail"}
                color={"orange"}
                onPress={handleInvitationsButtonPress}
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
