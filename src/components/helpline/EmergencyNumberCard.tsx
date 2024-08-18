import {View} from "react-native";
import {useState} from "react";
import emergencyNumbersPageStyles from "../../styles/pages/EmergencyNumbersPageStyles";
import EmergencyNumberCardHeader from "./EmergencyNumberCardHeader";
import {IsoCode} from "../../models/types/IsoCode";
import EmergencyNumberCardBody from "./EmergencyNumberCardBody";

interface IEmergencyNumberCardProps {
    countryCode: IsoCode
    size: number,
    data: {
        countryName: string,
        ambulance: string,
        fire: string,
        police: string
    }
}

const EmergencyNumberCard = (props: IEmergencyNumberCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDropdownButtonPress = () => {
        setIsExpanded(!isExpanded);
    }

    if (isExpanded) {
        return(
            <View style={emergencyNumbersPageStyles.expandedCardContainer}>
                <View style={emergencyNumbersPageStyles.expandedCard}>
                    <EmergencyNumberCardHeader
                        countryCode={props.countryCode}
                        countryName={props.data.countryName}
                        size={36}
                        eventHandler={handleDropdownButtonPress}
                        iconName={"keyboard-arrow-up"}
                    />
                </View>
                <View style={emergencyNumbersPageStyles.alarmContainer}>
                    <EmergencyNumberCardBody emojiCode={"0x1F691"} phoneNumber={props.data.ambulance} />
                    <EmergencyNumberCardBody emojiCode={"0x1F692"} phoneNumber={props.data.fire} />
                    <EmergencyNumberCardBody emojiCode={"0x1F693"} phoneNumber={props.data.police} />
                </View>
            </View>
        );
    }

    return(
        <View style={emergencyNumbersPageStyles.collapsedCard}>
            <EmergencyNumberCardHeader
                countryCode={props.countryCode}
                countryName={props.data.countryName}
                size={36}
                eventHandler={handleDropdownButtonPress}
                iconName={"keyboard-arrow-down"}
            />
        </View>
    );
}

export default EmergencyNumberCard;
