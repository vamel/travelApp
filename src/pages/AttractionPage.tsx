import {ScrollView, View, Text, Image, SafeAreaView} from "react-native";
import {useEffect, useState, useContext, useCallback} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import {db, storage} from "../firebase/config";
import IconButton from "../components/icons/IconButton";
import {attractionPageStyles} from "../styles/pages/attractionPageStyles";
import {AuthContext} from "../store/user/auth-context";
import {UserDTO} from "../models/classes/UserDTO";
import OpeningHoursInfo from "../components/attraction/OpeningHoursInfo";
import {Attraction} from "../models/classes/Attraction";
import {parseAttractionData, parseCoords, parseOpeningHours, parseTicketPrices} from "../firebase/parseAttractionData";
import * as SplashScreen from "expo-splash-screen";
import TicketPricesInfo from "../components/attraction/TicketPricesInfo";
import Map from "../components/utils/Map";
import RegisterButton from "../components/register/RegisterButton";
import {AttractionContext} from "../store/attractions/attracion-context";
import {deleteAttraction} from "../firebase/manageAttraction";

SplashScreen.preventAutoHideAsync();

const AttractionPage = ({route, navigation}) => {
    const [attraction, setAttraction] = useState<Attraction>(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isFavourite, setIsFavourite] = useState(false);
    const [currentId, setCurrentId] = useState("");

    const authCtx = useContext(AuthContext);
    const attrCtx = useContext(AttractionContext);
    const currentUser: UserDTO = authCtx.user!;

    useEffect(() => {
        const getAttraction = () => {
            const receivedData = route.params.attractionData;
            const data: Attraction = parseAttractionData(receivedData);
            setCurrentId(receivedData.id ? receivedData.id : receivedData.uid);
            setAttraction(data);
        }
        getAttraction();

        const getImage = async () => {
            const gsReference = ref(storage, route.params.attractionData.images_url[0]);
            await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
        }
        getImage();

        if (authCtx.isAuthenticated && currentUser.favourites.includes(route.params.attractionData.uid)) {
            setIsFavourite(true);
        }
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (attraction) {
            await SplashScreen.hideAsync();
        }
    }, [attraction]);

    if (!attraction) {
        return null;
    }

    const handleFavouritePress = async () => {
        const userRef = doc(db, "users", authCtx.uid);
        setIsFavourite((isFavourite) => !isFavourite);
        if (isFavourite) {
            currentUser.favourites = currentUser.favourites.filter((id) => id !== currentId);
            await updateDoc(userRef, {
                favourites: arrayRemove(currentId)
            });
        } else {
            currentUser.favourites.push(currentId);
            await updateDoc(userRef, {
                favourites: arrayUnion(currentId)
            });
        }
    }

    const getAvailability = () => {
        const availabilityText = attraction.is_accessible_for_disabled ?
            "Accessible for people with disabilities." :
            "Not accessible for disabled people with disabilities."
        const styles = attraction.is_accessible_for_disabled ? attractionPageStyles.availableText : attractionPageStyles.notAvailableText;
        return <Text style={styles}>{availabilityText}</Text>
    }

    const onDeleteAttraction = () => {
        attrCtx.deleteAttraction(currentId);
        navigation.goBack();
        deleteAttraction(authCtx.user, currentId);
    }

    return(
        <SafeAreaView style={attractionPageStyles.attractionPage} onLayout={onLayoutRootView}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={attractionPageStyles.mainTitleContainer}>
                    <Text style={attractionPageStyles.title}>
                        {attraction.name}
                    </Text>
                    {authCtx.isAuthenticated &&
                    <IconButton
                        onPress={handleFavouritePress}
                        icon={"star"}
                        color={isFavourite ? "gold" : "grey"}
                    />}
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
                <OpeningHoursInfo openingHours={parseOpeningHours(attraction.opening_hours)} />
                <TicketPricesInfo ticketPrices={parseTicketPrices(attraction.ticket_prices)} />
                <Map coordinates={parseCoords(attraction.coords)} />
                {authCtx.isAuthenticated && authCtx.user.is_admin && <RegisterButton
                    title={"Delete"}
                    onPress={onDeleteAttraction}
                />}
            </ScrollView>
        </SafeAreaView>
    );
}

export default AttractionPage;
