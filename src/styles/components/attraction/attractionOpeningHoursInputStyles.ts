import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const attractionOpeningHoursInputStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    dayContainer: {
        flexDirection: "column"
    },
    dayText: {
        fontWeight: "bold",
        color: COLORS.attraction.orange300
    },
    timeInput: {
        width: 60
    }
});