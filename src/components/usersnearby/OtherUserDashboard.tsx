import ProfileButton from "../userprofile/ProfileButton";
import {userDashboardStyles} from "../../styles/components/userprofile/userDashboardStyles";
import {Text, View} from "react-native";

interface IOtherUserDashboardProps {
    username: string;
}

const OtherUserDashboard = (props: IOtherUserDashboardProps) => {
    return(
        <View style={userDashboardStyles.userDashboardContainer}>
            <Text style={userDashboardStyles.userNameText}>{props.username}</Text>
            <ProfileButton
                icon={"mail"}
                color={"orange"}
                onPress={() => console.log("pressed")}
                text={"Invite user"}
            />
            <ProfileButton
                icon={"close-circle"}
                color={"red"}
                onPress={() => console.log("pressed")}
                text={"Block user"}
            />
        </View>
    );
}

export default OtherUserDashboard;
