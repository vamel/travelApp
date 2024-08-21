import {View, Text} from "react-native";
import {eventDateCardStyles} from "../../styles/components/EventDateCardStyles";

const EventDateCard = (props) => {
    const displayDate = props.date.toDate();
    const day = displayDate.getDay();
    const month = displayDate.toLocaleDateString("en-GB", {month: "short"});
    const year = displayDate.getFullYear();

    const getDayOrdinalSuffix = () => {
        switch (day) {
            case [1, 21, 31].includes(day):
                return 'st'
            case [2, 22].includes(day):
                return 'nd'
            case [3, 23].includes(day):
                return 'rd'
            default:
                return 'th'
        }
    }

    return(
        <View style={eventDateCardStyles.container}>
            <Text style={eventDateCardStyles.text}>{`${month} ${day}${getDayOrdinalSuffix()}`}</Text>
            <Text style={eventDateCardStyles.text}>{year}</Text>
        </View>
    );
}

export default EventDateCard;
