import {View, Text} from "react-native";
import EventDateCard from "./EventDateCard";
import {eventCardStyles} from "../../styles/components/EventCardStyles";

interface IEventCardProps {
    date: string,
    location: string,
    name: string
}

const EventCard = (props: IEventCardProps) => {

    return(
        <View style={eventCardStyles.eventCard}>
            <View>
                <EventDateCard date={props.date} />
            </View>
            <View style={eventCardStyles.textContainer}>
                <Text style={eventCardStyles.titleText}>{props.name}</Text>
                <Text style={eventCardStyles.locationText}>at POLIN museum</Text>
            </View>
        </View>
    );
}

export default EventCard;
