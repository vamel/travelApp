import {useContext} from "react";
import {AuthContext} from "../../store/user/auth-context";
import StackNavigation from "./StackNavigation";
import {NavigationContainer} from "@react-navigation/native";
import AuthenticatedStackNavigation from "./AuthenticatedStackNavigation";

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);

    return(
        <NavigationContainer>
            {authCtx.isAuthenticated ? <AuthenticatedStackNavigation /> : <StackNavigation />}
        </NavigationContainer>
    );
}

export default MainNavigation;
