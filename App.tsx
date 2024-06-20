import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AttractionList from './src/components/main/AttractionList';
import AttractionPage from "./src/components/attraction/AttractionPage";
import LoginPage from "./src/components/main/LoginPage";
import WelcomePage from "./src/components/main/WelcomePage";

export default function App() {

  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    'Roboto': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf')
  });

  const Root = () => {
      // @ts-ignore
      return (
        <Drawer.Navigator>
            <Drawer.Screen name={"WelcomePage"} component={WelcomePage} options={{title: "Home"}}/>
            <Drawer.Screen name={"AttractionList"} component={AttractionList} options={{title: "Attraction List"}}/>
        </Drawer.Navigator>
      );
  }

  // @ts-ignore
  return (
      <>
      <StatusBar style={"dark"}/>
      <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name={"Root"} component={Root} options={{headerShown: false}}/>
                  <Stack.Screen name={"LoginPage"} component={LoginPage} options={{title: "Login Page"}}/>
                  <Stack.Screen name={"WelcomePage"} component={WelcomePage} options={{title: "Home"}}/>
                  <Stack.Screen name={"AttractionList"} component={AttractionList} options={{title: "Attraction List"}}/>
                  <Stack.Screen name={"AttractionPage"} component={AttractionPage}/>
              </Stack.Navigator>
      </NavigationContainer>
      </>
  );
};
