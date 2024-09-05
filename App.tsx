import { StatusBar } from 'expo-status-bar';
import AuthContextProvider from "./src/store/user/auth-context";
import RootComponent from "./src/components/navigation/RootComponent";
import AttractionContextProvider from "./src/store/attractions/attracion-context";
import EventContextProvider from "./src/store/events/event-context";

export default function App() {

    return (
          <>
              <StatusBar style={"dark"} />
              <AuthContextProvider>
                  <AttractionContextProvider>
                      <EventContextProvider>
                        <RootComponent />
                      </EventContextProvider>
                  </AttractionContextProvider>
              </AuthContextProvider>
          </>
      );
};
