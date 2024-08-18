import { StatusBar } from 'expo-status-bar';
import StackNavigation from "./src/components/navigation/StackNavigation";

export default function App() {

    return (
          <>
              <StatusBar style={"dark"}/>
              <StackNavigation />
          </>
      );
};
