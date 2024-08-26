import {Dimensions, Platform, StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

const deviceWidth = Dimensions.get("window").width;

export const eventCardStyles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 10,
            marginBottom: 10,
            borderWidth: 2,
            borderRadius: 5,
            backgroundColor: COLORS.event.orange100,
            borderColor: COLORS.event.orange300,
            overflow: Platform.OS === "android" ? "hidden" : "visible",
        },
        eventCard: {
            flex: 1,
            height: 180,
            width: deviceWidth - 20,
            paddingLeft: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
        },
        textContainer: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        titleText: {
            marginHorizontal: 5,
            color: COLORS.universal.white,
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center"
        },
        locationText: {
            marginTop: 12,
            marginHorizontal: 5,
            color: COLORS.event.blue700,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center"
        },
        rippleAndroid: {
            color: "#CCCCCC"
        },
        buttonPressed: {
            opacity: 0.75
        }
    }
);
