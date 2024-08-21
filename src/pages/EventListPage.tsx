import {View, Text, FlatList, SafeAreaView, Pressable} from "react-native";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/config";
import EventCard from "../components/event/EventCard";
import {eventListPageStyles} from "../styles/pages/EventListPageStyles";
import {eventCardStyles} from "../styles/components/EventCardStyles";

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

    const renderEventCard = (event) => {
        const handleCardPress = () => {
            navigation.navigate("EventPage",
                {
                    eventData: event
                })
        };

        return (
            <View style={eventCardStyles.container}>
                <Pressable
                    onPress={handleCardPress}
                    android_ripple={eventListPageStyles.rippleAndroid}
                    style={({pressed}) => pressed ? eventListPageStyles.buttonPressed : null}
                >
                    <EventCard
                        date={event.date}
                        location={event.location}
                        name={event.name}
                    />
                </Pressable>
            </View>
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
