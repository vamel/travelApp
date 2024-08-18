import {Dimensions, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const deviceWidth = Dimensions.get("screen").width;

const emergencyNumbersPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    collapsedCard: {
        flexDirection: "row",
        width: 0.9 * deviceWidth,
        height: 70,
        marginBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: COLORS.emergency.orange100,
        borderWidth: 2,
        borderColor: COLORS.emergency.orange300,
        borderRadius: 5,
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden"
    },
    collapsedCardText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.universal.black,
    },
    dropdownButton: {
        height: 36,
        width: 36,
        backgroundColor: COLORS.universal.white,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    expandedCardContainer: {
        marginBottom: 20,
        width: 0.9 * deviceWidth,
        height: 200,
        borderWidth: 2,
        borderColor: COLORS.emergency.orange300,
        borderRadius: 5,
        overflow: "hidden"
    },
    expandedCard: {
        flexDirection: "row",
        width: (0.9 * deviceWidth) - 4,
        height: 70,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderColor: COLORS.emergency.orange300,
        backgroundColor: COLORS.emergency.orange100,
        justifyContent: "space-between",
        alignItems: "center"
    },
    alarmContainer: {
        flex: 1,
        backgroundColor: COLORS.emergency.orange100,
        flexDirection: "row",
    },
    alarmNumber: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emoji: {
        fontSize: 36,
        textAlign: "center",
        marginBottom: 16
    },
    phoneNumber: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    }
})

export default emergencyNumbersPageStyles;
