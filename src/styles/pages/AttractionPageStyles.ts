import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const attractionPageStyles = StyleSheet.create(
    {
        attractionPage: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        imageContainer: {
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            height: 245,
            width: 300,
            borderRadius: 5,
            overflow: "hidden"
        },
        titleContainer: {
            marginVertical: 10,
            width: 250
        },
        title: {
            marginBottom: 20,
            textAlign: "center",
            fontSize: 28,
            fontWeight: "bold",
            color: COLORS.attraction.orange300
        },
        detailsContainer: {
            marginTop: 15,
            marginHorizontal: 30
        },
        detailsTitle: {
            marginBottom: 8,
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.attraction.orange800
        },
        detailsText: {
            fontSize: 16,
        },
        availableText: {
            marginBottom: 16,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.attraction.green300
        },
        notAvailableText: {
            marginBottom: 16,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.attraction.red500
        },
        openingHoursText: {
            marginBottom: 4,
            fontSize: 16,
        }
    }
)
