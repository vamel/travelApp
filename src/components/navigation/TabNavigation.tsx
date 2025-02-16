import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import COLORS from "../../styles/utils/Colors";
import WelcomePage from "../../pages/WelcomePage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AttractionListPage from "../../pages/AttractionListPage";
import EventListPage from "../../pages/EventListPage";
import EmergencyNumbersPage from "../../pages/EmergencyNumbersPage";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    // @ts-ignore
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.navigation.tabNavigator.activeTintColor
        }}>
            <Tab.Screen
                name={"WelcomePage"}
                component={WelcomePage}
                options={{
                    title: "Home",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="home" size={size} color={color} />)}}
            />
            <Tab.Screen
                name={"AttractionListPage"}
                component={AttractionListPage}
                options={{
                    title: "Attractions",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="castle" size={size} color={color} />)}}
            />
            <Tab.Screen
                name={"EventListPage"}
                component={EventListPage}
                options={{
                    title: "Events",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="festival" size={size} color={color} />)}}
            />
            <Tab.Screen
                name={"EmergencyNumbersPage"}
                component={EmergencyNumbersPage}
                options = {{
                    title: "Alarm numbers",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="report-problem" size={size} color={color} />)}}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;
