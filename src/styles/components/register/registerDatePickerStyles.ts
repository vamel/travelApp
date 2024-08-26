import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const registerDatePickerStyles = StyleSheet.create(
    {
        container: {
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
        },
        birthdayContainer: {
            flexDirection: "row"
        },
        birthdaySubtitle: {
            marginBottom: 8,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.orange500
        },
        dateInput: {
            width: 150,
            height: 40,
            marginVertical: 4,
            marginLeft: 20,
            padding: 8,
            borderRadius: 5,
            backgroundColor: COLORS.universal.gray500,
            textAlign: "center",
        }
    }
);
