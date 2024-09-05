import {View, Text, FlatList, SafeAreaView} from "react-native";
import {useContext} from "react";
import EventCard from "../components/event/EventCard";
import {eventListPageStyles} from "../styles/pages/eventListPageStyles";
import {IEvent} from "../models/interfaces/IEvent";
import {EventContext} from "../store/events/event-context";
import {AuthContext} from "../store/user/auth-context";
import {toTitle} from "../utils/stringUtils";

const EventListPage = ({navigation}) => {
    const evtCtx = useContext(EventContext);
    const authCtx = useContext(AuthContext);

    const handleCardPress = (event: IEvent) => {
        navigation.navigate("EventPage",
            {
                name: event.name,
                description: event.description,
                date: event.date,
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
            <Text style={eventListPageStyles.titleText}>{`Events in ${toTitle(authCtx.user.last_location)}`}</Text>
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
