import {View, Text, Pressable} from "react-native";
import EventDateCard from "./EventDateCard";
import {eventCardStyles} from "../../styles/components/EventCardStyles";
import {IEvent} from "../../models/interfaces/IEvent";

interface IEventCardProps {
    eventData: IEvent,
    onPress: (event: any) => void
}

const EventCard = (props: IEventCardProps) => {
    return(
        <View style={eventCardStyles.container}>
            <Pressable
                onPress={props.onPress.bind(this, props.eventData)}
                android_ripple={eventCardStyles.rippleAndroid}
                style={({pressed}) => pressed ? eventCardStyles.buttonPressed : null}
            >
                <View style={eventCardStyles.eventCard}>
                    <View>
                        <EventDateCard date={props.eventData.date} />
                    </View>
                    <View style={eventCardStyles.textContainer}>
                        <Text style={eventCardStyles.titleText}>{props.eventData.name}</Text>
                        <Text style={eventCardStyles.locationText}>at POLIN museum</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default EventCard;
