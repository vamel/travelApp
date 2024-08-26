import {View, Text, FlatList, SafeAreaView} from "react-native";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/config";
import EventCard from "../components/event/EventCard";
import {eventListPageStyles} from "../styles/pages/eventListPageStyles";
import {IEvent} from "../models/interfaces/IEvent";

const EventListPage = ({navigation}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const eventsSnapshot = await getDocs(collection(db, "events"));
            const eventsList: any = eventsSnapshot.docs.map(doc => doc.data());
            setEvents(eventsList);
        }
        getData();
    }, []);

    const handleCardPress = (event: IEvent) => {
        navigation.navigate("EventPage",
            {
                name: event.name,
                description: event.description,
                date: event.date,
            }
        )};

    const renderEventCard = (event) => {
        return (
            <EventCard eventData={event} onPress={handleCardPress}/>
        );
    }

    return(
        <SafeAreaView style={eventListPageStyles.container}>
            <Text style={eventListPageStyles.titleText}>Events in Warsaw</Text>
            <View style={[eventListPageStyles.items]}>
                <FlatList
                    initialNumToRender={10}
                    data={events}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }: {item}) => renderEventCard(item)}
                    contentContainerStyle={eventListPageStyles.listContainer}
                />
            </View>
        </SafeAreaView>
    );
}

export default EventListPage;
