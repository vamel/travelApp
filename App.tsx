import { StatusBar } from 'expo-status-bar';
import StackNavigation from "./src/components/navigation/StackNavigation";
import AuthContextProvider from "./src/store/user/auth-context";

export default function App() {

    return (
          <>
              <AuthContextProvider>
                  <StatusBar style={"dark"}/>
                  <StackNavigation />
              </AuthContextProvider>
          </>
      );
};
