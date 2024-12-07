import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IIconButton {
    icon: string,
    color: string,
    onPress: () => void
}

const IconButton = (props: IIconButton) => {
    return(
        <Pressable onPress={props.onPress} style={({pressed}) =>
            [iconButtonStyles.container, pressed && iconButtonStyles.pressed]}>
            <Ionicons name={props.icon} size={36} color={props.color}/>
        </Pressable>
    );
}

export default IconButton;

const iconButtonStyles = StyleSheet.create(
    {
        container: {
            marginBottom: 20,
        },
        pressed: {
            opacity: 0.7
        }
    }
);
