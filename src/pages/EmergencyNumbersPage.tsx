import {FlatList, View} from "react-native";
import emergencyNumbersPageStyles from "../styles/pages/EmergencyNumbersPageStyles";
import EmergencyNumberCard from "../components/helpline/EmergencyNumberCard";
import {EMERGENCY_NUMBERS, COUNTRY_CODES} from "../models/constants/EMERGENCY_NUMBERS";
import HelplineButton from "../components/helpline/HelplineButton";

const EmergencyNumbersPage = () => {

    return(
        <View style={emergencyNumbersPageStyles.container}>
            <HelplineButton />
            <FlatList
                initialNumToRender={15}
                showsVerticalScrollIndicator={false}
                data={COUNTRY_CODES}
                renderItem={({item}) => <EmergencyNumberCard countryCode={item} size={36} data={EMERGENCY_NUMBERS[item]}/>}
                keyExtractor={item => item}
                contentContainerStyle={emergencyNumbersPageStyles.listContainer}
            />
        </View>
    );
}

export default EmergencyNumbersPage;
