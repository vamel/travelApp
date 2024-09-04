import { StatusBar } from 'expo-status-bar';
import AuthContextProvider from "./src/store/user/auth-context";
import RootComponent from "./src/components/navigation/RootComponent";

export default function App() {

    return (
          <>
              <StatusBar style={"dark"} />
              <AuthContextProvider>
                  <RootComponent />
              </AuthContextProvider>
          </>
      );
};
