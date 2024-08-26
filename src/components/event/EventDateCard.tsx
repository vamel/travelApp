import {View, Text} from "react-native";
import {eventDateCardStyles} from "../../styles/components/event/eventDateCardStyles";
import {getDateElements, getDayOrdinalSuffix} from "../../utils/dateUtils";

const EventDateCard = (props) => {
    const [day, month, year] = getDateElements(props.date);

    return(
        <View style={eventDateCardStyles.container}>
            <Text style={eventDateCardStyles.text}>{`${month} ${getDayOrdinalSuffix(day)}`}</Text>
            <Text style={eventDateCardStyles.text}>{year}</Text>
        </View>
    );
}

export default EventDateCard;
