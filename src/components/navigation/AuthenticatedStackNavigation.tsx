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
import AuthenticatedTabNavigation from "./AuthenticatedTabNavigation";
import FavouritesPage from "../../pages/FavouritesPage";
import OtherUserPage from "../../pages/OtherUserPage";
import EditProfilePage from "../../pages/EditProfilePage";
import CreateInvitationPage from "../../pages/CreateInvitationPage";
import MapPage from "../../pages/MapPage";
import AddAttractionPage from "../../pages/AddAttractionPage";
import AddEventPage from "../../pages/AddEventPage";

const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {
    // @ts-ignore
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={"AuthenticatedTabNavigation"}
                    component={AuthenticatedTabNavigation}
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
                    name={"EditProfilePage"}
                    component={EditProfilePage}
                    options={{title: "Edit Profile"}}
                />
                <Stack.Screen
                    name={"SignOutPage"}
                    component={SignOutPage}
                    options={{title: "Sign Out"}}
                />
                <Stack.Screen
                    name={"OtherUserPage"}
                    component={OtherUserPage}
                />
                <Stack.Screen
                    name={"AttractionPage"}
                    component={AttractionPage}
                />
                <Stack.Screen
                    name={"AddAttractionPage"}
                    component={AddAttractionPage}
                    options={{title: "Add new attraction"}}
                />
                <Stack.Screen
                    name={"EventPage"}
                    component={EventPage}
                />
                <Stack.Screen
                    name={"AddEventPage"}
                    component={AddEventPage}
                    options={{title: "Create new event"}}
                />
                <Stack.Screen
                    name={"EmergencyNumbersPage"}
                    component={EmergencyNumbersPage}
                    options={{title: "Emergency Numbers"}}
                />
                <Stack.Screen
                    name={"FavouritesPage"}
                    component={FavouritesPage}
                    options={{title: "Favourite attractions"}}
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
                <Stack.Screen
                    name={"CreateInvitationPage"}
                    component={CreateInvitationPage}
                />
                <Stack.Screen
                    name={"MapPage"}
                    component={MapPage}
                    options={{
                        headerShown: true,
                        headerBackVisible: false,
                        title: "Pick location"
                }}
                />
            </Stack.Navigator>
    );
}

export default AuthenticatedStackNavigation;
