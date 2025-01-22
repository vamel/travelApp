import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const attractionOpeningHoursInputStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    dayText: {
        fontWeight: "bold",
        color: COLORS.attraction.orange300
    },
    weekdayContainer: {
        marginVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    timeInput: {
        width: 60,
        marginVertical: 4,
        padding: 8,
        textAlign: "center",
        textAlignVertical: "top",
        flexWrap: "wrap",
        borderRadius: 5,
        backgroundColor: COLORS.universal.gray500
    },
    colon: {
        marginHorizontal: 4,
        fontSize: 16,
        fontWeight: "bold",
    }
});