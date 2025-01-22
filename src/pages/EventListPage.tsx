import {View, Text, FlatList, SafeAreaView} from "react-native";
import {useContext, useEffect, useState} from "react";
import EventCard from "../components/event/EventCard";
import {eventListPageStyles} from "../styles/pages/eventListPageStyles";
import {EventContext} from "../store/events/event-context";
import {AuthContext} from "../store/user/auth-context";
import {toTitle} from "../utils/stringUtils";
import {Event} from "../models/classes/Event";
import SearchBar from "../components/utils/SearchBar";
import AddNewButton from "../components/utils/AddNewButton";

const EventListPage = ({navigation}) => {
    const authCtx = useContext(AuthContext);
    const evtCtx = useContext(EventContext);

    const [cityName, setCityName] = useState<string>(authCtx.location);
    const [searchedCityName, setSearchedCityName] = useState<string>();

    useEffect(() => {
        evtCtx.fetchData(cityName);
    }, [cityName, authCtx.location]);

    const handleCardPress = (event: Event) => {
        navigation.navigate("EventPage",
            {
                eventData: event
            }
        )};

    const handleAddNewButtonPress = () => {
        navigation.navigate("AddEventPage");
    }

    const fetchMoreData = () => {
        evtCtx.fetchMore();
    }

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

    const renderEventCard = (event: Event) => {
        return (
            <EventCard eventData={event} onPress={handleCardPress}/>
        );
    }

    return(
        <SafeAreaView style={eventListPageStyles.container}>
            <Text style={eventListPageStyles.titleText}>Events in {toTitle(cityName)}</Text>
            <View style={eventListPageStyles.searchContainer}>
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
            <View style={[eventListPageStyles.items]}>
                <FlatList
                    initialNumToRender={10}
                    data={evtCtx.eventList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }: {item}) => renderEventCard(item)}
                    contentContainerStyle={eventListPageStyles.listContainer}
                    onEndReachedThreshold={0.35}
                    onEndReached={fetchMoreData}
                />
            </View>
        </SafeAreaView>
    );
}

export default EventListPage;
