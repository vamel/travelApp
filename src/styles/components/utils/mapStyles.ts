import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";


export const mapStyles = StyleSheet.create(
    {
        mapContainer: {
            marginVertical: 15,
            marginHorizontal: 30,
        },
        detailsTitle: {
            marginBottom: 8,
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.attraction.orange800
        },
        mapPreview: {
            width: "100%",
            height: 200,
            marginVertical: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4
        },
        image: {
            width: "100%",
            height: "100%",
            borderRadius: 4,
        },
        addressText: {
            marginTop: 4,
            marginBottom: 20,
            fontSize: 16,
        }
    }
);
