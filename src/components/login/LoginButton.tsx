import { Pressable, StyleSheet, View, Text } from "react-native";
import COLORS from "../../styles/utils/Colors";

function LoginButton({title, onPress}) {
    return(
        <View style={loginButtonStyles.container}>
            <Pressable
                style={loginButtonStyles.button}
                onPress={onPress}>
                <Text style={loginButtonStyles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default LoginButton;

const loginButtonStyles = StyleSheet.create({
    container: {
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 10,
        width: 300,
        borderRadius: 20,
        backgroundColor: COLORS.universal.orange500,
        elevation: 4,
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        color: COLORS.universal.white
    }
})
