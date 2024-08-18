import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInPage from "../../pages/SignInPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";
import SignOutPage from "../../pages/SignOutPage";
import TabNavigation from "./TabNavigation";
import WelcomePage from "../../pages/WelcomePage";
import AttractionPage from "../../pages/AttractionPage";
import EmergencyNumbersPage from "../../pages/EmergencyNumbersPage";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    // @ts-ignore
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={"SignInPage"}
                    component={SignInPage}
                    options={{title: "Login"}}
                />
                <Stack.Screen
                    name={"ResetPasswordPage"}
                    component={ResetPasswordPage}
                    options={{title: "Reset Password"}}
                />
                <Stack.Screen
                    name={"SignOutPage"}
                    component={SignOutPage}
                    options={{title: "Sign Out"}}
                />
                <Stack.Screen
                    name={"TabNavigation"}
                    component={TabNavigation}
                />
                <Stack.Screen
                    name={"WelcomePage"}
                    component={WelcomePage}
                    options={{title: "Home"}}
                />
                <Stack.Screen
                    name={"AttractionPage"}
                    component={AttractionPage}
                />
                <Stack.Screen
                    name={"EmergencyNumbersPage"}
                    component={EmergencyNumbersPage}
                    options={{title: "Emergency Numbers"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;
