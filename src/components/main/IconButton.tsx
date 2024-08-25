import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IIconButton {
    icon: string,
    color: string,
    onPress: () => void
}

const IconButton = (props: IIconButton) => {
    return(
        <Pressable onPress={props.onPress} style={({pressed}) => pressed && iconButtonStyles.pressed}>
            <Ionicons name={props.icon} size={24} color={props.color}/>
        </Pressable>
    );
}

export default IconButton;

const iconButtonStyles = StyleSheet.create(
    {
        pressed: {
            opacity: 0.7
        }
    }
);
