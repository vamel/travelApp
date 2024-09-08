import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const eventPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            justifyContent: "center",
            alignItems: "center",
        },
        title: {
            marginBottom: 20,
            textAlign: "center",
            fontSize: 28,
            fontWeight: "bold",
            color: COLORS.attraction.orange300
        },
        organiserText: {
            marginBottom: 20,
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
            color: COLORS.attraction.orange100
        },
        detailsContainer: {
            width: 325,
            marginTop: 15,
            marginHorizontal: 30,
        },
        detailsTitle: {
            marginBottom: 8,
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.attraction.orange800
        },
        detailsText: {
            fontSize: 16,
        }
    }
);
