import {StyleSheet, Platform, StatusBar} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

const attractionListPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
        },
        titleText: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.attraction.orange300
        },
        listContainer: {
            paddingTop: 10,
            paddingBottom: 40
        },
        items: {
            paddingTop: 10,
            alignItems: 'stretch',
            flexDirection: 'column',
        },
        rippleAndroid: {
            color: "#CCCCCC"
        },
        buttonPressed: {
            opacity: 0.75
        },
    }
)

export default attractionListPageStyles;
