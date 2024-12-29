import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {iconButtonStyles} from "../../styles/components/icons/iconButtonStyles";

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