import {View, Text, TextInput} from "react-native";
import {attractionOpeningHoursInputStyles} from "../../styles/components/attraction/attractionOpeningHoursInputStyles";
import {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const AttractionOpeningHoursInput = (props) => {
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

    return(
        <View style={attractionOpeningHoursInputStyles.container}>
            <View style={attractionOpeningHoursInputStyles.dayContainer}>
                <Text style={attractionOpeningHoursInputStyles.dayText}>Monday</Text>
                <Text style={attractionOpeningHoursInputStyles.dayText}>Tuesday</Text>
                <Text style={attractionOpeningHoursInputStyles.dayText}>Wednesday</Text>
                <Text style={attractionOpeningHoursInputStyles.dayText}>Thursday</Text>
                <Text style={attractionOpeningHoursInputStyles.dayText}>Friday</Text>
                <Text style={attractionOpeningHoursInputStyles.dayText}>Saturday</Text>
                <Text style={attractionOpeningHoursInputStyles.dayText}>Sunday</Text>
            </View>
        </View>
    );
}

export default AttractionOpeningHoursInput;