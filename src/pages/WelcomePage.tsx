import {View, Text, Image} from "react-native";
import {useEffect, useState} from "react";
import {db, storage} from "../firebase/config";
import {getDoc, doc} from "firebase/firestore";
import {getDownloadURL, ref} from "firebase/storage";
import {City} from "../models/classes/City";
import {welcomePageStyles} from "../styles/pages/WelcomePageStyles";

const WelcomePage = () => {
    const [cityData, setCityData] = useState<City>(null);

    useEffect(() => {
        const getData = async () => {
            // const docRef = doc(db, "cities", "warsaw");
            // const docSnap = await getDoc(docRef);
            // const cityData = docSnap.data();
            // //@ts-ignore
            // const gsReference = ref(storage, cityData.imageUri);
            // await getDownloadURL(gsReference).then(result => {
            //     //@ts-ignore
            //     const city = new City(cityData.name, result, cityData.trivia);
            //     setCityData(city);
            // });
        }
        getData();
    }, []);

    if (!cityData) {
        return(
            <View style={welcomePageStyles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={welcomePageStyles.container}>
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
