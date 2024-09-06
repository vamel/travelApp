import {StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

export const welcomePageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginHorizontal: 20,
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            fontSize: 24,
            textAlign: "center"
        },
        cityName: {
            fontWeight: "bold",
            color: COLORS.universal.orange500
        },
        imageContainer: {
            marginTop: 20,
            marginHorizontal: 10,
            alignItems: 'stretch',
            overflow: "hidden"
        },
        image: {
            height: 500,
            width: 300,
            borderRadius: 5,
            resizeMode: "cover"
        },
        triviaTitle: {
            marginTop: 10,
            fontWeight: "bold",
            fontSize: 18,
            color: COLORS.universal.orange500
        },
        triviaText: {
            marginTop: 4,
            marginBottom: 10,
            textAlign: "center"
        }
    }
);
