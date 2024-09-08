import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/user/auth-context";
import ProfileButton from "../components/userprofile/ProfileButton";
import {useNavigation} from "@react-navigation/native";
import {attractionCardStyles} from "../styles/components/attraction/attractionCardStyles";
import attractionListPageStyles from "../styles/pages/attractionListPageStyles";
import AttractionCard from "../components/attraction/AttractionCard";
import {Attraction} from "../models/classes/Attraction";
import {collection, documentId, getDocs, limit, orderBy, query, startAfter, where} from "firebase/firestore";
import {db} from "../firebase/config";
import {UserDTO} from "../models/classes/UserDTO";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const FavouritesPage = () => {
    const [favouriteAttractions, setFavouriteAttractions] = useState([]);
    const [lastId, setLastId] = useState("");
    const authCtx = useContext(AuthContext);
    const navigation = useNavigation();
    const currentUser: UserDTO = authCtx.user!;

    useEffect(() => {
        const getFavourites = async () => {
            const attrRef = collection(db, "attractions");
            const q = query(attrRef, where(documentId(), "in", currentUser.favourites),
                orderBy(documentId()));
            const querySnapshot = await getDocs(q);
            const receivedAttractions = querySnapshot.docs.map((doc) => {
                return {uid: doc.id, ...doc.data()}
            });
            setFavouriteAttractions(receivedAttractions);
            setLastId(querySnapshot.docs.pop().id);
        }
        getFavourites();
    }, [])

    const handleGoBackButton = () => {
        navigation.goBack();
    }

    const fetchMoreData = async () => {
        const attrRef = collection(db, "attractions");
        const q = query(attrRef, where(documentId(), "in", currentUser.favourites),
            limit(5), orderBy(documentId()), startAfter(lastId));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return;
        }
        const receivedAttractionList = querySnapshot.docs.map(doc => doc.data());
        setFavouriteAttractions((favouriteAttractions) => [...favouriteAttractions, ...receivedAttractionList]);
        setLastId(querySnapshot.docs.pop().id);
    }

    const checkIfFavourite = () => {
        if (favouriteAttractions) {
            return(
                <FlatList
                    initialNumToRender={10}
                    data={favouriteAttractions}
                    keyExtractor={(item: Attraction) => item.name}
                    renderItem={(item) => renderAttractionCard(item.item)}
                    contentContainerStyle={attractionListPageStyles.listContainer}
                    onEndReachedThreshold={0.35}
                    onEndReached={fetchMoreData}
                />
            );
        }
        return <Text>No attractions added to favourites.</Text>
    }

    const renderAttractionCard = (attraction) => {
        const handleCardPress = () => {
            //@ts-ignore
            navigation.navigate("AttractionPage",
                {
                    attractionData: attraction,
                });
        }

        return (
            <View style={attractionCardStyles.container} key={attraction.name}>
                <Pressable
                    onPress={handleCardPress}
                    android_ripple={attractionListPageStyles.rippleAndroid}
                    style={({pressed}) => pressed ? attractionListPageStyles.buttonPressed : null}
                >
                    <AttractionCard
                        imageUrl={attraction.images_url[0]}
                        name={attraction.name}
                    />
                </Pressable>
            </View>
        );
    }

    return(
        <SafeAreaView style={attractionListPageStyles.container}>
            <Text style={attractionListPageStyles.titleText}>Favourite Attractions</Text>
            <View style={attractionListPageStyles.favouritePageButtonContainer}>
                <ProfileButton
                    icon={"return-up-back"}
                    color={"red"}
                    onPress={handleGoBackButton}
                    text={"Go back"}
                />
            </View>
            <View style={attractionListPageStyles.items}>
                {checkIfFavourite()}
            </View>
        </SafeAreaView>
    );
}

export default FavouritesPage;
