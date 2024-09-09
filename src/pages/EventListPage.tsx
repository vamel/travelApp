import {View, Text, FlatList, SafeAreaView} from "react-native";
import {useContext, useEffect, useState} from "react";
import EventCard from "../components/event/EventCard";
import {eventListPageStyles} from "../styles/pages/eventListPageStyles";
import {EventContext} from "../store/events/event-context";
import {AuthContext} from "../store/user/auth-context";
import {toTitle} from "../utils/stringUtils";
import {Event} from "../models/classes/Event";
import AttractionSearchBar from "../components/attraction/AttractionSearchBar";

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

    const renderEventCard = (event) => {
        return (
            <EventCard eventData={event} onPress={handleCardPress}/>
        );
    }

    return(
        <SafeAreaView style={eventListPageStyles.container}>
            <Text style={eventListPageStyles.titleText}>Events in {toTitle(cityName)}</Text>
            <AttractionSearchBar onPress={handleSearchButtonPress} onChangeText={onSearchInputChange} />
            <View style={[eventListPageStyles.items]}>
                <FlatList
                    initialNumToRender={10}
                    data={evtCtx.eventList}
                    keyExtractor={(item) => item.name}
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
