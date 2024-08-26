import {Pressable, Text, View} from "react-native";
import {profileButtonStyles} from "../../styles/components/userprofile/profileButtonStyles";
import {Ionicons} from "@expo/vector-icons";
import COLORS from "../../styles/utils/Colors";
import {getColorValue} from "../../utils/colorUtils";

interface IProfileButtonProps {
    icon: string,
    color: string,
    text: string,
    onPress: () => void
}

const ProfileButton = (props: IProfileButtonProps) => {
    const color = getColorValue(props.color);

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
