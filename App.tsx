import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AttractionList from './src/components/main/AttractionList';
import AttractionPage from "./src/pages/AttractionPage";
import LoginPage from "./src/pages/LoginPage";
import WelcomePage from "./src/pages/WelcomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const Root = () => {
      // @ts-ignore
      return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name={"LoginPage"}
                component={LoginPage}
                options={{
                    title: "Login",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="person" size={size} color={color} />),
                    tabBarActiveTintColor: "blue"}}/>
            <Tab.Screen
                name={"WelcomePage"}
                component={WelcomePage}
                options={{
                    title: "Home",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="home" size={size} color={color} />)}}/>
            <Tab.Screen
                name={"AttractionList"}
                component={AttractionList}
                options={{
                    title: "Attraction List",
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="castle" size={size} color={color} />)}}/>
        </Tab.Navigator>
      );
  }

  // @ts-ignore
  return (
      <>
          <StatusBar style={"dark"}/>
          <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen name={"Root"} component={Root} options={{headerShown: false}}/>
                      <Stack.Screen name={"LoginPage"} component={LoginPage} options={{title: "Login"}}/>
                      <Stack.Screen name={"WelcomePage"} component={WelcomePage} options={{title: "Home"}}/>
                      <Stack.Screen name={"AttractionList"} component={AttractionList} options={{title: "Attraction List"}}/>
                      <Stack.Screen name={"AttractionPage"} component={AttractionPage}/>
                  </Stack.Navigator>
          </NavigationContainer>
      </>
  );
};
