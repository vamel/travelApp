import {View, Text, FlatList, SafeAreaView} from "react-native";
import {useContext, useEffect, useState} from "react";
import EventCard from "../components/event/EventCard";
import {eventListPageStyles} from "../styles/pages/eventListPageStyles";
import {EventContext} from "../store/events/event-context";
import {AuthContext} from "../store/user/auth-context";
import {toTitle} from "../utils/stringUtils";
import {Event} from "../models/classes/Event";

const EventListPage = ({navigation}) => {
    const [cityName, setCityName] = useState<string>("");
    const evtCtx = useContext(EventContext);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        setCityName(authCtx.location)
        evtCtx.fetchData(authCtx.location);
    }, [authCtx.location]);

    const handleCardPress = (event: Event) => {
        navigation.navigate("EventPage",
            {
                eventData: event
            }
        )};

    const fetchMoreData = () => {
        evtCtx.fetchMore();
    }

    const renderEventCard = (event) => {
        return (
            <EventCard eventData={event} onPress={handleCardPress}/>
        );
    }

    return(
        <SafeAreaView style={eventListPageStyles.container}>
            <Text style={eventListPageStyles.titleText}>Events in {toTitle(cityName)}</Text>
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
