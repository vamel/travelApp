import {useNavigation} from "@react-navigation/native";
import {Pressable, Text, View} from "react-native";
import {helplineButtonStyles} from "../../styles/components/helpline/helplineButtonStyles";

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

