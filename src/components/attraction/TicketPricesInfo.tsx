import {attractionPageStyles} from "../../styles/pages/attractionPageStyles";
import {View, Text} from "react-native";
import {TicketPrices} from "../../models/classes/TicketPrices";

interface ITicketPricesInfoProps {
    ticketPrices: TicketPrices;
}

const TicketPricesInfo = (props: ITicketPricesInfoProps) => {
    return(
        <View style={attractionPageStyles.detailsContainer}>
            <Text style={attractionPageStyles.detailsTitle}>Ticket prices:</Text>
            <Text style={attractionPageStyles.openingHoursText}>
                Regular ticket: {props.ticketPrices.regular} {props.ticketPrices.currency}
            </Text>
            <Text style={attractionPageStyles.openingHoursText}>
                Reduced ticket: {props.ticketPrices.reduced} {props.ticketPrices.currency}
            </Text>
            <Text style={attractionPageStyles.openingHoursText}>
                Student ticket: {props.ticketPrices.student} {props.ticketPrices.currency}
            </Text>
            <Text style={attractionPageStyles.openingHoursText}>
                Group ticket: {props.ticketPrices.group} {props.ticketPrices.currency}
            </Text>
        </View>
    );
}

export default TicketPricesInfo;
