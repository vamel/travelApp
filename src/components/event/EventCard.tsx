import {View, Text, Pressable} from "react-native";
import EventDateCard from "./EventDateCard";
import {eventCardStyles} from "../../styles/components/event/eventCardStyles";
import {Event} from "../../models/classes/Event";

interface IEventCardProps {
    eventData: Event,
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
                        <Text style={eventCardStyles.locationText}>{`at ${props.eventData.organiser}`}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default EventCard;
