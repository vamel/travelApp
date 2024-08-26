import {View, Text} from "react-native";
import {userInfoFieldStyles} from "../../styles/components/userprofile/userInfoFieldStyles";

interface IUserInfoFieldProps {
    text: string,
    value: string
}

const UserInfoField = (props: IUserInfoFieldProps) => {
    return(
        <View style={userInfoFieldStyles.userInfoFieldContainer}>
            <Text style={userInfoFieldStyles.userInfoFieldTitle}>{props.text}</Text>
            <Text style={userInfoFieldStyles.userInfoFieldValue}>{props.value}</Text>
        </View>
    );
}

export default UserInfoField;
