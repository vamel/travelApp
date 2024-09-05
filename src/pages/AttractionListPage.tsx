import {useContext, useEffect, useState} from "react";
import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native";
import {Attraction} from "../models/interfaces/Attraction";
import AttractionCard from "../components/attraction/AttractionCard";
import attractionListPageStyles from "../styles/pages/attractionListPageStyles";
import attractionCardStyles from "../styles/components/attraction/attractionCardStyles";
import AttractionSearchBar from "../components/attraction/AttractionSearchBar";
import {toTitle} from "../utils/stringUtils";
import {AttractionContext} from "../store/attractions/attracion-context";

const AttractionListPage = ({navigation}) => {
    const [cityName, setCityName] = useState<string>("Warsaw");
    const [searchedCityName, setSearchedCityName] = useState<string>("Warsaw");

    const attrCtx = useContext(AttractionContext);

    useEffect(() => {
        attrCtx.fetchData(cityName);
    }, [cityName]);

    const onSearchInputChange = (searchedCityName: string) => {
        setSearchedCityName(toTitle(searchedCityName.trim()));
    }

    const handleSearchButtonPress = () => {
        setCityName(searchedCityName);
    }

    const fetchMoreData = () => {
        attrCtx.fetchMore();
    }

    const renderAttractionCard = (attraction) => {
        const handleCardPress = () => {
            navigation.navigate("AttractionPage",
                {
                    attractionData: attraction
                })
        };

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

    return (
        <SafeAreaView style={attractionListPageStyles.container}>
            <Text style={attractionListPageStyles.titleText}>Attractions in {cityName}</Text>
            <AttractionSearchBar onPress={handleSearchButtonPress} onChangeText={onSearchInputChange} />
            <View style={attractionListPageStyles.items}>
                <FlatList
                    initialNumToRender={10}
                    data={attrCtx.attractionList}
                    keyExtractor={(item: Attraction) => item.name}
                    renderItem={({ item }: {item: Attraction}) => renderAttractionCard(item)}
                    contentContainerStyle={attractionListPageStyles.listContainer}
                    onEndReachedThreshold={0.35}
                    onEndReached={fetchMoreData}
                />
            </View>
        </SafeAreaView>
    );
}

export default AttractionListPage;
