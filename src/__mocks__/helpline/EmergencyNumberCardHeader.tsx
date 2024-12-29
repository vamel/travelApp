import CountryFlag from "react-native-country-flag";
import {Pressable, Text, View} from "react-native";
import emergencyNumbersPageStyles from "../../styles/pages/emergencyNumbersPageStyles";
import {IsoCode} from "../../models/types/IsoCode";

interface IEmergencyNumberCardHeaderProps {
    countryCode: IsoCode,
    countryName: string,
    size: number,
    eventHandler: () => void,
    iconName: string
}

const EmergencyNumberCardHeader = (props: IEmergencyNumberCardHeaderProps) => {
    return(
        <>
            <CountryFlag isoCode={props.countryCode} size={props.size} style={{borderRadius: 3}} />
            <Text style={emergencyNumbersPageStyles.collapsedCardText}>{props.countryName}</Text>
            <Pressable onPress={props.eventHandler}>
                <View style={emergencyNumbersPageStyles.dropdownButton}>
                    <Text>Icon mocked</Text>
                </View>
            </Pressable>
        </>
    );
}

export default EmergencyNumberCardHeader;
