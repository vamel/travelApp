import {View, Text, Button, StyleSheet} from "react-native";

const WelcomePage = ({navigation}) => {

    const handleTemporaryLogout = () => {
        navigation.navigate("SignOutPage")
    }

    return (
        <View style={styles.container}>
            <Text>
                Welcome User! You are currently in Warsaw.
            </Text>
            <Button title={"Sign out"} onPress={handleTemporaryLogout} />
        </View>
    );
}

export default WelcomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
