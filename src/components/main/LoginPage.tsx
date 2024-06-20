import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

const LoginPage = (props) => {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigation = props.navigation;

    const handleLoginPress = () => {
        navigation.navigate("AttractionList");
    }

    return(
        <View style={loginPageStyles.container}>
            <Text>Welcome to travelApp</Text>
            <View style={loginPageStyles.inputContainer}>
                <TextInput
                    placeholder={"login"}
                    onChangeText={setLoginInput}
                    value={loginInput}
                    style={loginPageStyles.textInput}/>
                <TextInput
                    placeholder={"password"}
                    onChangeText={setPasswordInput}
                    value={passwordInput}
                    style={loginPageStyles.textInput}/>
                <View style={loginPageStyles.buttonContainers}>
                    <Pressable
                        onPress={handleLoginPress}
                        style={loginPageStyles.loginButton}>
                        <Text>LOGIN</Text>
                    </Pressable>
                    <Pressable
                        style={loginPageStyles.registerButton}>
                        <Text>REGISTER</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default LoginPage;

const loginPageStyles = StyleSheet.create(
    {
        container: {
            margin: 16,
            alignItems: "center",
            justifyContent: "center"
        },
        inputContainer: {
            margin: 16,
            height: "60%",
            width: "90%",
            borderRadius: 8,
            elevation: 4,
            shadowColor: "black",
            backgroundColor: "#e8edb4",
            shadowOpacity: 0.25,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 8,
            overflow: Platform.OS === "android" ? "hidden" : "visible",
            alignItems: "center",
            justifyContent: "center"
        },
        textInput: {
            marginTop: 16,
            width: '70%',
            height: 40,
            padding: 8,
            fontSize: 18,
            backgroundColor: "azure",
            borderRadius: 5,
        },
        buttonContainers: {
            marginTop: "15%",
            flexDirection: "row"
        },
        loginButton: {
            marginRight: "10%",
            padding: 16,
            width: 100,
            borderRadius: 8,
            elevation: 4,
            backgroundColor: "#96d783",
            alignItems: "center",
        },
        registerButton: {
            marginLeft: "10%",
            padding: 16,
            width: 100,
            borderRadius: 8,
            elevation: 4,
            backgroundColor: "#f0676c",
            alignItems: "center"
        }
    }
)
