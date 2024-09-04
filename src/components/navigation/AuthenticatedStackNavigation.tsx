import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInPage from "../../pages/SignInPage";
import RegisterPage from "../../pages/RegisterPage";
import CreateProfilePage from "../../pages/CreateProfilePage";
import CompleteRegistrationPage from "../../pages/CompleteRegistrationPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";
import SignOutPage from "../../pages/SignOutPage";
import WelcomePage from "../../pages/WelcomePage";
import AttractionPage from "../../pages/AttractionPage";
import EventPage from "../../pages/EventPage";
import EmergencyNumbersPage from "../../pages/EmergencyNumbersPage";
import InvitationListPage from "../../pages/InvitationListPage";
import InvitationPage from "../../pages/InvitationPage";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {
    // @ts-ignore
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
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
                    name={"SignInPage"}
                    component={SignInPage}
                    options={{title: "Login"}}
                />
                <Stack.Screen
                    name={"RegisterPage"}
                    component={RegisterPage}
                    options={{title: "Create an account"}}
                />
                <Stack.Screen
                    name={"CreateProfilePage"}
                    component={CreateProfilePage}
                    options={{title: "Create an account"}}
                />
                <Stack.Screen
                    name={"CompleteRegistrationPage"}
                    component={CompleteRegistrationPage}
                    options={{title: "Complete registration"}}
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
                    name={"AttractionPage"}
                    component={AttractionPage}
                />
                <Stack.Screen
                    name={"EventPage"}
                    component={EventPage}
                />
                <Stack.Screen
                    name={"EmergencyNumbersPage"}
                    component={EmergencyNumbersPage}
                    options={{title: "Emergency Numbers"}}
                />
                <Stack.Screen
                    name={"InvitationListPage"}
                    component={InvitationListPage}
                    options={{title: "Invitation List Page"}}
                />
                <Stack.Screen
                    name={"InvitationPage"}
                    component={InvitationPage}
                    options={{title: "Invitation Page"}}
                />
            </Stack.Navigator>
    );
}

export default AuthenticatedStackNavigation;
