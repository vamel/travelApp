import {View, Text} from "react-native";
import {userPageStyles} from "../../styles/pages/UserPageStyles";

interface IUserInfoField {
    text: string,
    value: string
}

const UserInfoField = (props: IUserInfoField) => {
    return(
        <View style={userPageStyles.userInfoFieldContainer}>
            <Text style={userPageStyles.userInfoFieldTitle}>{props.text}</Text>
            <Text style={userPageStyles.userInfoFieldValue}>{props.value}</Text>
        </View>
    );
}

export default UserInfoField;
