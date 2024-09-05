import { Attraction } from "../models/interfaces/Attraction";
import {ScrollView, View, Text, Image, SafeAreaView} from "react-native";
import {useEffect, useState, useLayoutEffect, useContext} from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/config";
import IconButton from "../components/main/IconButton";
import {attractionPageStyles} from "../styles/pages/attractionPageStyles";
import {AuthContext} from "../store/user/auth-context";

const AttractionPage = ({navigation, route}) => {
    const [attraction, setAttraction] = useState<Attraction>(new Attraction("", "", []));
    const [imageUrl, setImageUrl] = useState('');
    const [isFavourite, setIsFavourite] = useState(false);
    const isAccessibleForDisabledPeople = false;

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const getAttraction = () => {
            const receivedData = route.params.attractionData;
            const data: Attraction = new Attraction(receivedData.name, receivedData.description, receivedData.images_url);
            setAttraction(data);
        }
        getAttraction();

        const getImage = async () => {
            const gsReference = ref(storage, route.params.attractionData.images_url[0]);
            await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
        }
        getImage();
    }, []);

    const handleFavouritePress = () => {
        setIsFavourite((isFavourite) => !isFavourite);
        alert("Added to favourites");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: attraction.name,
            headerRight: () => {
                return (
                <IconButton
                    onPress={handleFavouritePress}
                    icon={"star"}
                    color={isFavourite ? "gold" : "grey"}/>
                );
            }
        })
    }, [navigation, attraction, isFavourite]);

    const getAvailability = () => {
        const availabilityText = isAccessibleForDisabledPeople ?
            "Accessible for disabled people." :
            "Not accessible for disabled people."
        const styles = isAccessibleForDisabledPeople ? attractionPageStyles.availableText : attractionPageStyles.notAvailableText;
        return <Text style={styles}>{availabilityText}</Text>
    }

    return(
        <SafeAreaView style={attractionPageStyles.attractionPage}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={attractionPageStyles.title}>
                        {attraction.name}
                    </Text>
                </View>
                <View style={attractionPageStyles.imageContainer}>
                    <Image source={{ uri: imageUrl ? imageUrl : undefined }} style={attractionPageStyles.image}/>
                </View>
                <View style={attractionPageStyles.detailsContainer}>
                    {getAvailability()}
                    <Text style={attractionPageStyles.detailsTitle}>Description:</Text>
                    <Text style={attractionPageStyles.detailsText}>
                        {attraction.description}
                    </Text>
                </View>
                <View style={attractionPageStyles.detailsContainer}>
                    <Text style={attractionPageStyles.detailsTitle}>Opening Hours:</Text>
                    <Text style={attractionPageStyles.openingHoursText}>Monday: Closed</Text>
                    <Text style={attractionPageStyles.openingHoursText}>Tuesday: 10:00-17:00</Text>
                    <Text style={attractionPageStyles.openingHoursText}>Wednesday: 10:00-17:00</Text>
                    <Text style={attractionPageStyles.openingHoursText}>Thursday: 10:00-17:00</Text>
                    <Text style={attractionPageStyles.openingHoursText}>Friday: 10:00-17:00</Text>
                    <Text style={attractionPageStyles.openingHoursText}>Saturday: 10:00-18:00</Text>
                    <Text style={attractionPageStyles.openingHoursText}>Sunday: 10:00-16:00</Text>
                </View>
                <View style={attractionPageStyles.detailsContainer}>
                    <Text style={attractionPageStyles.detailsTitle}>Ticket prices:</Text>
                    <Text>Normal ticket - 20 zł</Text>
                </View>
                <View style={attractionPageStyles.detailsContainer}>
                    <Text style={attractionPageStyles.detailsTitle}>Location:</Text>
                    <Text>Placeholder for a map</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AttractionPage;
