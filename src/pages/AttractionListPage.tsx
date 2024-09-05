import {useContext, useEffect, useState} from "react";
import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native";
// import {Attraction} from "../models/interfaces/Attraction";
import {Attraction} from "../models/classes/Attraction";
import AttractionCard from "../components/attraction/AttractionCard";
import attractionListPageStyles from "../styles/pages/attractionListPageStyles";
import AttractionSearchBar from "../components/attraction/AttractionSearchBar";
import {toTitle} from "../utils/stringUtils";
import {AttractionContext} from "../store/attractions/attracion-context";
import {AuthContext} from "../store/user/auth-context";
import {UserDTO} from "../models/classes/UserDTO";
import {attractionCardStyles} from "../styles/components/attraction/attractionCardStyles";

const AttractionListPage = ({navigation}) => {
    const [cityName, setCityName] = useState<string>("");
    const [searchedCityName, setSearchedCityName] = useState<string>("Warsaw");

    const authCtx = useContext(AuthContext);
    const attrCtx = useContext(AttractionContext);
    const currentUser: UserDTO = authCtx.user!

    useEffect(() => {
        setCityName(currentUser.last_location)
        attrCtx.fetchData(currentUser.last_location);
    }, []);

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
                });
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
            <Text style={attractionListPageStyles.titleText}>Attractions in {toTitle(cityName)}</Text>
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
