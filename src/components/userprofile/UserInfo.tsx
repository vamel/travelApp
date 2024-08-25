import {View, Text} from "react-native";
import {userPageStyles} from "../../styles/pages/UserPageStyles";
import UserInfoField from "./UserInfoField";

const UserInfo = () => {
    return(
        <View style={userPageStyles.userDetailsContainer}>
            <Text style={userPageStyles.userBio}>Bio</Text>
            <UserInfoField text={"Field"} value={"value"}/>
        </View>
    );
}

export default UserInfo;
