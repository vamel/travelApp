import {Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {addNewButtonStyles} from "../../styles/components/utils/addNewButtonStyles";

interface IAddNewButtonProps {
    icon: string,
    text: string,
    onPress: () => void
}

const AddNewButton = (props: IAddNewButtonProps) => {
    return(
        <Pressable
            onPress={props.onPress}
            style={({pressed}) =>
                [addNewButtonStyles.button, pressed && addNewButtonStyles.pressed]}
        >
            <View style={addNewButtonStyles.iconContainer}>
                <Ionicons name={props.icon} size={20} onPress={props.onPress} style={addNewButtonStyles.icon} />
            </View>
            <Text style={addNewButtonStyles.text}>{props.text}</Text>
        </Pressable>
    );
}

export default AddNewButton;