import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const invitationLocationPickerStyles = StyleSheet.create(
    {
        mapPreview: {
            width: 300,
            height: 200,
            marginVertical: 8,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: COLORS.universal.orange500,
            borderRadius: 4
        },
        actions: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
        },
        image: {
            width: "100%",
            height: "100%",
            borderRadius: 4,
        }
    }
);
