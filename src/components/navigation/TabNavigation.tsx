import WelcomePage from "../../pages/WelcomePage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AttractionListPage from "../../pages/AttractionListPage";
import EventListPage from "../../pages/EventListPage";
import COLORS from "../../styles/utils/Colors";
import UserPage from "../../pages/UserPage";
import {useContext} from "react";
import {AuthContext} from "../../store/user/auth-context";
import UsersNearbyPage from "../../pages/UsersNearbyPage";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const authCtx = useContext(AuthContext);

    // @ts-ignore
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.navigation.tabNavigator.activeTintColor
        }}>
            <Tab.Screen
                name={"WelcomePage"}
                component={WelcomePage}
                options={{
                    title: "Home",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="home" size={size} color={color} />)}}/>
            <Tab.Screen
                name={"UsersNearbyPage"}
                component={UsersNearbyPage}
                options={{
                    title: "Users Nearby",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="people" size={size} color={color} />)}}/>
            <Tab.Screen
                name={"AttractionListPage"}
                component={AttractionListPage}
                options={{
                    title: "Attractions",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="castle" size={size} color={color} />)}}/>
            <Tab.Screen
                name={"EventListPage"}
                component={EventListPage}
                options={{
                    title: "Events",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="festival" size={size} color={color} />)}}/>
            <Tab.Screen
                name={"UserPage"}
                component={UserPage}
                options={{
                    title: "Profile",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="person" size={size} color={color} />)}}/>
        </Tab.Navigator>
    );
}

export default TabNavigation;
