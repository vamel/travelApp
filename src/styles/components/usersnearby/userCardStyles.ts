import {Dimensions, Platform, StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

const deviceWidth = Dimensions.get("window").width;

export const userCardStyles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 10,
            marginBottom: 15,
            borderWidth: 2,
            borderRadius: 5,
            backgroundColor: COLORS.attraction.orange100,
            borderColor: COLORS.attraction.orange300,
            overflow: Platform.OS === "android" ? "hidden" : "visible",
        },
        userCard: {
            flex: 1,
            height: 180,
            width: deviceWidth - 20,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
        },
        imageContainer: {
            alignItems: 'stretch',
        },
        image: {
            height: 180,
            width: 180,
        },
        textContainer: {
            flex: 1,
            marginHorizontal: 10,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            color: COLORS.universal.white,
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center"
        },
        distanceText: {
            marginTop: 8,
            color: COLORS.universal.white,
            fontSize: 16,
            textAlign: "center"
        }
    }
);
