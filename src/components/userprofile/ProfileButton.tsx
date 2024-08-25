import {Pressable, Text, View} from "react-native";
import {profileButtonStyles} from "../../styles/components/ProfileButtonStyles";
import {Ionicons} from "@expo/vector-icons";
import COLORS from "../../styles/utils/Colors";

interface IProfileButton {
    icon: string,
    color: string,
    text: string,
    onPress: () => void
}

const ProfileButton = (props: IProfileButton) => {
    const color = props.color === "orange" ? COLORS.universal.orange500 : COLORS.universal.purple500;

    return(
        <Pressable
            onPress={props.onPress}
            style={({pressed}) =>
                [profileButtonStyles.button, pressed && profileButtonStyles.pressed, {backgroundColor: color}]}
        >
            <View style={profileButtonStyles.iconContainer}>
                <Ionicons name={props.icon} size={20} onPress={props.onPress} style={profileButtonStyles.icon} />
            </View>
            <Text style={profileButtonStyles.text}>{props.text}</Text>
        </Pressable>
    );
}

export default ProfileButton;
