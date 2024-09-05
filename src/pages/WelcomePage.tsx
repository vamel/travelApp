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

SplashScreen.preventAutoHideAsync();

const WelcomePage = () => {
    const [cityData, setCityData] = useState<City>(null);
    const attrCtx = useContext(AttractionContext);
    const evtCtx = useContext(EventContext);

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "cities", "warsaw");
            const docSnap = await getDoc(docRef);
            const cityData = docSnap.data();
            attrCtx.fetchData("warsaw");
            evtCtx.fetchData("warsaw");
            //@ts-ignore
            const gsReference = ref(storage, cityData.imageUri);
            await getDownloadURL(gsReference).then(result => {
                //@ts-ignore
                const city = new City(cityData.name, result, cityData.trivia);
                setCityData(city);
            });
        }
        getData();
    }, []);

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
                Currently exploring <Text style={welcomePageStyles.cityName}>{cityData.name}</Text>!
            </Text>
            <View style={welcomePageStyles.imageContainer}>
                <Image source={{uri: cityData.imageUri}} style={welcomePageStyles.image} />
            </View>
            <Text style={welcomePageStyles.triviaTitle}>Did you know?</Text>
            <Text style={welcomePageStyles.triviaText}>{cityData.trivia}</Text>
        </View>
    );
}

export default WelcomePage;
