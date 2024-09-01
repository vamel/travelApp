import {useEffect, useState} from "react";
import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/config";
import {Attraction} from "../models/interfaces/Attraction";
import AttractionCard from "../components/attraction/AttractionCard";
import attractionListPageStyles from "../styles/pages/attractionListPageStyles";
import attractionCardStyles from "../styles/components/attraction/attractionCardStyles";
import AttractionSearchBar from "../components/attraction/AttractionSearchBar";
import {toTitle} from "../utils/stringUtils";

const AttractionListPage = ({navigation}) => {
    const [shownAttractions, setShownAttractions] = useState([]);
    const [cityName, setCityName] = useState<string>("Warsaw");
    const [searchedCityName, setSearchedCityName] = useState<string>("Warsaw");

    let attractions = [];

    useEffect(() => {
        const getData = async () => {
            const attrSnapshot = await getDocs(collection(db, "attractions"));
            attractions = attrSnapshot.docs.map(doc => doc.data());
            setShownAttractions(attractions.filter((attraction) => attraction.city === cityName));
        }
        getData();
    }, [cityName]);

    const onSearchInputChange = (searchedCityName: string) => {
        setSearchedCityName(toTitle(searchedCityName.trim()));
    }

    const handleSearchButtonPress = () => {
        setCityName(searchedCityName);
        setShownAttractions(attractions.filter((attraction) => attraction.city === cityName));
    }

    const renderAttractionCard = (attraction) => {
        const handleCardPress = () => {
            navigation.navigate("AttractionPage",
                {
                    attractionData: attraction
                })
        };

        return (
            <View style={attractionCardStyles.container}>
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

    return (
        <SafeAreaView style={attractionListPageStyles.container}>
            <Text style={attractionListPageStyles.titleText}>Attractions in {cityName}</Text>
            <AttractionSearchBar onPress={handleSearchButtonPress} onChangeText={onSearchInputChange} />
            <View style={[attractionListPageStyles.items]}>
                <FlatList
                    initialNumToRender={10}
                    data={shownAttractions}
                    keyExtractor={(item: Attraction) => item.name}
                    renderItem={({ item }: {item: Attraction}) => renderAttractionCard(item)}
                    contentContainerStyle={attractionListPageStyles.listContainer}
                />
            </View>
        </SafeAreaView>
    );
}

export default AttractionListPage;
