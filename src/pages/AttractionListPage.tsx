import {useContext, useEffect, useState} from "react";
import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native";
import {Attraction} from "../models/classes/Attraction";
import AttractionCard from "../components/attraction/AttractionCard";
import attractionListPageStyles from "../styles/pages/attractionListPageStyles";
import SearchBar from "../components/utils/SearchBar";
import {toTitle} from "../utils/stringUtils";
import {AttractionContext} from "../store/attractions/attracion-context";
import {AuthContext} from "../store/user/auth-context";
import {attractionCardStyles} from "../styles/components/attraction/attractionCardStyles";
import AddNewButton from "../components/utils/AddNewButton";

const AttractionListPage = ({navigation}) => {
    const authCtx = useContext(AuthContext);
    const attrCtx = useContext(AttractionContext);

    const [cityName, setCityName] = useState<string>(authCtx.location);
    const [searchedCityName, setSearchedCityName] = useState<string>("");

    useEffect(() => {
        attrCtx.fetchData(cityName);
    }, [cityName, authCtx.location]);

    const onSearchInputChange = (searchedCityName: string) => {
        setSearchedCityName(toTitle(searchedCityName.trim()));
    }

    const handleSearchButtonPress = () => {
        if (!searchedCityName) {
            setCityName(authCtx.location);
        } else {
            setCityName(searchedCityName);
        }
    }

    const handleAddNewButtonPress = () => {
        navigation.navigate("AddAttractionPage");
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
            <View style={attractionListPageStyles.searchContainer}>
                <SearchBar
                    onPress={handleSearchButtonPress}
                    onChangeText={onSearchInputChange}
                    placeholderText={"Enter city name"}
                    width={authCtx.isAuthenticated ? 230 : 350}
                />
                {authCtx.isAuthenticated &&
                    <AddNewButton
                        icon={"add"}
                        onPress={handleAddNewButtonPress}
                        text={"Add new"}/>
                }
            </View>
            <View style={attractionListPageStyles.items}>
                <FlatList
                    initialNumToRender={10}
                    data={attrCtx.attractionList}
                    keyExtractor={(item: Attraction) => item.id}
                    renderItem={(item) => renderAttractionCard(item.item)}
                    contentContainerStyle={attractionListPageStyles.listContainer}
                    onEndReachedThreshold={0.35}
                    onEndReached={fetchMoreData}
                />
            </View>
        </SafeAreaView>
    );
}

export default AttractionListPage;
