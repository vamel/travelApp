import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const profilePictureImagePickerStyles = StyleSheet.create(
    {
        container: {
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        profilePicture: {
            marginTop: 10,
            width: 190,
            height: 190,
            borderWidth: 5,
            borderColor: COLORS.universal.orange500
        }
    }
);
