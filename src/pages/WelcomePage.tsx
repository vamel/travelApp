import {View, Text, Image} from "react-native";
import {useCallback, useContext, useEffect, useState} from "react";
import {db, storage} from "../firebase/config";
import {getDoc, doc} from "firebase/firestore";
import {getDownloadURL, ref} from "firebase/storage";
import {City} from "../models/classes/City";
import {welcomePageStyles} from "../styles/pages/welcomePageStyles";
import * as SplashScreen from "expo-splash-screen";
import {AttractionContext} from "../store/attractions/attracion-context";
import {EventContext} from "../store/events/event-context";
import {AuthContext} from "../store/user/auth-context";

SplashScreen.preventAutoHideAsync();

const WelcomePage = () => {
    const [cityData, setCityData] = useState<City>(null);
    const authCtx = useContext(AuthContext);
    const attrCtx = useContext(AttractionContext);
    const evtCtx = useContext(EventContext);

    useEffect(() => {
        const getData = async () => {
            //@ts-ignore
            const last_location = authCtx.location ? authCtx.location : "Nowhere";
            const docRef = doc(db, "cities", last_location);
            const docSnap = await getDoc(docRef);
            const cityData = docSnap.data();
            attrCtx.fetchData(last_location);
            evtCtx.fetchData(last_location);
            //@ts-ignore
            const gsReference = ref(storage, cityData.imageUri);
            await getDownloadURL(gsReference).then(result => {
                //@ts-ignore
                const city = new City(cityData.name, result, cityData.trivia);
                setCityData(city);
            });
        }
        getData().catch(error => {
            setCityData(new City(authCtx.location, null, null));
        });
    }, [authCtx.user]);

    const onLayoutRootView = useCallback(async () => {
        if (cityData) {
            await SplashScreen.hideAsync();
        }
    }, [cityData]);

    if (!cityData) {
        return null;
    }

    return(
        <View style={welcomePageStyles.container} onLayout={onLayoutRootView}>
            <Text style={welcomePageStyles.title}>
                Currently exploring <Text style={welcomePageStyles.cityName}>{authCtx.location}</Text>!
            </Text>
            {cityData.imageUri &&
            <View style={welcomePageStyles.imageContainer}>
                <Image source={{uri: cityData.imageUri ? cityData.imageUri : undefined}} style={welcomePageStyles.image} />
            </View>
            }
            {cityData.trivia &&
            <>
                <Text style={welcomePageStyles.triviaTitle}>Did you know?</Text>
                <Text style={welcomePageStyles.triviaText}>{cityData.trivia}</Text>
            </>
            }
        </View>
    );
}

export default WelcomePage;
