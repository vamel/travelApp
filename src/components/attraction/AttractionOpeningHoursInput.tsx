import {View, Text, TextInput} from "react-native";
import {attractionOpeningHoursInputStyles} from "../../styles/components/attraction/attractionOpeningHoursInputStyles";
import {useState} from "react";

interface IAttractionOpeningHoursInputProps {
    onOpeningHoursChange: (string, string) => void;
}

const AttractionOpeningHoursInput = (props: IAttractionOpeningHoursInputProps) => {
    const weekList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const [openingHours, setOpeningHours] = useState({
        monday: "00:00",
        tuesday: "00:00",
        wednesday: "00:00",
        thursday: "00:00",
        friday: "00:00",
        saturday: "00:00",
        sunday: "00:00"
    });

    const [closingHours, setClosingHours] = useState({
        monday: "00:00",
        tuesday: "00:00",
        wednesday: "00:00",
        thursday: "00:00",
        friday: "00:00",
        saturday: "00:00",
        sunday: "00:00"
    });

    const onOpeningHoursTimeChange = (day: string, time: string) => {
        const hours = openingHours;
        const weekday = day.toLowerCase();
        hours[weekday] = time.padStart(2, '0') + ":" + openingHours[weekday].substring(3, 5);
        setOpeningHours({...openingHours, ...hours});
        const valuePassed = openingHours[weekday] + " - " + closingHours[weekday];
        props.onOpeningHoursChange(weekday, valuePassed);
    }

    const onOpeningMinutesTimeChange = (day: string, time: string) => {
        const hours = openingHours;
        const weekday = day.toLowerCase();
        hours[weekday] = openingHours[weekday].substring(0, 2) + ":" + time.padStart(2, '0');
        setOpeningHours({...openingHours, ...hours});
        const valuePassed = openingHours[weekday] + " - " + closingHours[weekday];
        props.onOpeningHoursChange(weekday, valuePassed);
    }

    const onClosingHoursTimeChange = (day: string, time: string) => {
        const hours = closingHours;
        const weekday = day.toLowerCase();
        hours[weekday] = time.padStart(2, '0') + ":" + closingHours[weekday].substring(3, 5);
        setClosingHours({...closingHours, ...hours});
        const valuePassed = openingHours[weekday] + " - " + closingHours[weekday];
        props.onOpeningHoursChange(weekday, valuePassed);
    }

    const onClosingMinutesTimeChange = (day: string, time: string) => {
        const hours = closingHours;
        const weekday = day.toLowerCase();
        hours[weekday] = closingHours[weekday].substring(0, 2) + ":" + time.padStart(2, '0');
        setClosingHours({...closingHours, ...hours});
        const valuePassed = openingHours[weekday] + " - " + closingHours[weekday];
        props.onOpeningHoursChange(weekday, valuePassed);
    }

    return(
        <View style={attractionOpeningHoursInputStyles.container}>
            {weekList.map(week => (
                <View key={week} style={attractionOpeningHoursInputStyles.weekdayContainer}>
                    <Text style={attractionOpeningHoursInputStyles.dayText}>{week}</Text>
                    <View style={attractionOpeningHoursInputStyles.inputContainer}>
                        <TextInput
                            maxLength={2}
                            keyboardType={"numeric"}
                            style={attractionOpeningHoursInputStyles.timeInput}
                            onChangeText={(text) => onOpeningHoursTimeChange(week, text)}
                        />
                        <Text style={attractionOpeningHoursInputStyles.colon}>:</Text>
                        <TextInput
                            maxLength={2}
                            keyboardType={"numeric"}
                            style={attractionOpeningHoursInputStyles.timeInput}
                            onChangeText={(text) => onOpeningMinutesTimeChange(week, text)}
                        />
                        <Text style={attractionOpeningHoursInputStyles.colon}>-</Text>
                        <TextInput
                            maxLength={2}
                            keyboardType={"numeric"}
                            style={attractionOpeningHoursInputStyles.timeInput}
                            onChangeText={(text) => onClosingHoursTimeChange(week, text)}
                        />
                        <Text style={attractionOpeningHoursInputStyles.colon}>:</Text>
                        <TextInput
                            maxLength={2}
                            keyboardType={"numeric"}
                            style={attractionOpeningHoursInputStyles.timeInput}
                            onChangeText={(text) => onClosingMinutesTimeChange(week, text)}
                        />
                    </View>
                </View>
            ))}
        </View>
    );
}

export default AttractionOpeningHoursInput;