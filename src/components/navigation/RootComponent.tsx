import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../../store/user/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import MainNavigation from "./MainNavigation";
import {View} from "react-native";

SplashScreen.preventAutoHideAsync();

const RootComponent = () => {
    const [isTryingLogIn, setIsTryingLogIn] = useState(true);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function fetchToken() {
            const storedToken = await SecureStore.getItem("token");
            const storedUid = await AsyncStorage.getItem("uid");

            if (storedToken) {
                authCtx.authenticate(storedToken, storedUid as string);
            }
            setIsTryingLogIn(false);
        }

        fetchToken();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (!isTryingLogIn) {
            await SplashScreen.hideAsync();
        }
    }, [isTryingLogIn]);

    if (isTryingLogIn) {
        return null;
    }

    return(
        <View style={{flex: 1}} onLayout={onLayoutRootView}>
            <MainNavigation />
        </View>

    );
}

export default RootComponent;
