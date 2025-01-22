import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const addAttractionPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
        justifyContent: "center",
        alignItems: "center"
    },
    titleContainer: {
        marginBottom: 10
    },
    title: {
        marginBottom: 4,
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
        color: COLORS.universal.orange500
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        color: COLORS.register.gray700
    },
    mapContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 20
    },
    errorText: {
        marginTop: 4,
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.universal.red500
    }
});