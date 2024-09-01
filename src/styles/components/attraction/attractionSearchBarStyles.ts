import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const attractionSearchBarStyles = StyleSheet.create(
    {
        container: {
            width: 350,
            height: 50,
            marginTop: 10,
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.attraction.orange300
        },
        searchInput: {
            height: 40,
            width: 280,
            paddingLeft: 5,
            borderRadius: 5,
            backgroundColor: COLORS.attraction.orange100,
            fontWeight: "bold",
            color: COLORS.universal.white
        },
        button: {
            width: 40,
            height: 40,
            margin: 4,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.universal.purple500
        },
        iconContainer: {
            width: 40,
            flexDirection: "row",
            justifyContent: "center",
        },
        icon: {
            color: COLORS.universal.white
        }
    }
);
