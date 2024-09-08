import ProfileButton from "../userprofile/ProfileButton";
import {userDashboardStyles} from "../../styles/components/userprofile/userDashboardStyles";
import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

interface IOtherUserDashboardProps {
    username: string;
    uid: string;
    pictureUrl: string;
}

const OtherUserDashboard = (props: IOtherUserDashboardProps) => {
    const navigation = useNavigation();

    const handleInviteButtonPress = () => {
        //@ts-ignore
        navigation.navigate("CreateInvitationPage", {
            invitee: props.uid,
            username: props.username,
            pictureUrl: props.pictureUrl
        });
    }

    return(
        <View style={userDashboardStyles.userDashboardContainer}>
            <Text style={userDashboardStyles.userNameText}>{props.username}</Text>
            <ProfileButton
                icon={"mail"}
                color={"orange"}
                onPress={handleInviteButtonPress}
                text={"Invite user"}
            />
            {/*<ProfileButton*/}
            {/*    icon={"close-circle"}*/}
            {/*    color={"red"}*/}
            {/*    onPress={() => console.log("pressed")}*/}
            {/*    text={"Block user"}*/}
            {/*/>*/}
        </View>
    );
}

export default OtherUserDashboard;
