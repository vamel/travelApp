import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const attractionTicketTypesInputStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    subtitleContainer: {
        marginVertical: 8
    },
    ticketTypeText: {
        textAlign: "center",
        fontWeight: "bold",
        color: COLORS.attraction.orange300
    },
    priceInput: {
        width: 100,
        padding: 8,
        textAlign: "center",
        textAlignVertical: "top",
        flexWrap: "wrap",
        borderRadius: 5,
        backgroundColor: COLORS.universal.gray500
    }
});