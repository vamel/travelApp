import {useNavigation} from "@react-navigation/native";
import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import COLORS from "../../styles/utils/Colors";

const HelplineButton = () => {
    const navigation = useNavigation();

    const handleReturnPress = () => {
        navigation.goBack();
    }

    return(
        <View style={helplineButtonStyles.container}>
            <Pressable
                style={helplineButtonStyles.button}
                onPress={handleReturnPress}>
                <Text style={helplineButtonStyles.text}>Go Back</Text>
            </Pressable>
        </View>
    );
}

export default HelplineButton;

const deviceWidth = Dimensions.get("window").width

const helplineButtonStyles = StyleSheet.create({
    container: {
        marginVertical: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 10,
        width: 0.9 * deviceWidth,
        borderRadius: 20,
        backgroundColor: COLORS.universal.purple500,
        elevation: 4,
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        color: COLORS.universal.white
    }
})
