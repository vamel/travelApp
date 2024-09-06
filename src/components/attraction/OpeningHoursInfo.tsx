import {attractionPageStyles} from "../../styles/pages/attractionPageStyles";
import {Text, View} from "react-native";
import {OpeningHours} from "../../models/classes/OpeningHours";
import {parseOpeningHours} from "../../firebase/parseAttractionData";

interface IOpeningHoursInfoProps {
    openingHours: OpeningHours;
}

const OpeningHoursInfo = (props: IOpeningHoursInfoProps) => {
    return(
        <View style={attractionPageStyles.detailsContainer}>
            <Text style={attractionPageStyles.detailsTitle}>Opening Hours:</Text>
            <Text style={attractionPageStyles.openingHoursText}>Monday: {props.openingHours.monday}</Text>
            <Text style={attractionPageStyles.openingHoursText}>Tuesday: {props.openingHours.tuesday}</Text>
            <Text style={attractionPageStyles.openingHoursText}>Wednesday: {props.openingHours.wednesday}</Text>
            <Text style={attractionPageStyles.openingHoursText}>Thursday: {props.openingHours.thursday}</Text>
            <Text style={attractionPageStyles.openingHoursText}>Friday: {props.openingHours.friday}</Text>
            <Text style={attractionPageStyles.openingHoursText}>Saturday: {props.openingHours.saturday}</Text>
            <Text style={attractionPageStyles.openingHoursText}>Sunday: {props.openingHours.sunday}</Text>
        </View>
    );
}

export default OpeningHoursInfo;
