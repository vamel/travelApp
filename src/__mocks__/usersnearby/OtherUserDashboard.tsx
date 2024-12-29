import ProfileButton from "../../components/userprofile/ProfileButton";
import {userDashboardStyles} from "../../styles/components/userprofile/userDashboardStyles";
import {Text, View} from "react-native";

interface IOtherUserDashboardProps {
    username: string;
    uid: string;
    pictureUrl: string;
}

const OtherUserDashboard = (props: IOtherUserDashboardProps) => {

    return(
        <View style={userDashboardStyles.userDashboardContainer}>
            <Text style={userDashboardStyles.userNameText}>{props.username}</Text>
            <ProfileButton
                icon={"mail"}
                color={"orange"}
                onPress={() => {}}
                text={"Invite user"}
            />
        </View>
    );
}

export default OtherUserDashboard;
