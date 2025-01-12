import {FlatList, View} from "react-native";
import emergencyNumbersPageStyles from "../styles/pages/emergencyNumbersPageStyles";
import EmergencyNumberCard from "../components/helpline/EmergencyNumberCard";
import {EMERGENCY_NUMBERS, COUNTRY_CODES} from "../models/constants/EMERGENCY_NUMBERS";
import HelplineButton from "../components/helpline/HelplineButton";
import SearchBar from "../components/utils/SearchBar";
import {useState} from "react";
import {IsoCode} from "../models/types/IsoCode";

const EmergencyNumbersPage = () => {
    const [emergencyNumberData, setEmergencyNumberData] = useState<IsoCode[]>(COUNTRY_CODES);

    const handleSearchTextChange = (text: string) => {
        setEmergencyNumberData(() => COUNTRY_CODES.filter((country: string) => country.includes(text.toUpperCase())));
    }

    return(
        <View style={emergencyNumbersPageStyles.container}>
            <HelplineButton />
            <SearchBar
                onPress={() => {}}
                onChangeText={handleSearchTextChange}
                placeholderText={"Search for a country"}
                width={350}
            />
            <FlatList
                initialNumToRender={15}
                showsVerticalScrollIndicator={false}
                data={emergencyNumberData}
                renderItem={({item}) => <EmergencyNumberCard countryCode={item} size={36} data={EMERGENCY_NUMBERS[item]}/>}
                keyExtractor={item => item}
                contentContainerStyle={emergencyNumbersPageStyles.listContainer}
            />
        </View>
    );
}

export default EmergencyNumbersPage;
