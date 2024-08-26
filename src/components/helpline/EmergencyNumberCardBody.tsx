import emergencyNumbersPageStyles from "../../styles/pages/emergencyNumbersPageStyles";
import {Text, View} from "react-native";

interface IEmergencyNumberCardBodyProps {
    emojiCode: string,
    phoneNumber: string
}

const EmergencyNumberCardBody = (props: IEmergencyNumberCardBodyProps) => {
    return(
        <View style={emergencyNumbersPageStyles.alarmNumber}>
            <Text style={emergencyNumbersPageStyles.emoji}>{String.fromCodePoint(parseInt(props.emojiCode))}</Text>
            <Text style={emergencyNumbersPageStyles.phoneNumber}>{props.phoneNumber}</Text>
        </View>
    );
}

export default EmergencyNumberCardBody;
