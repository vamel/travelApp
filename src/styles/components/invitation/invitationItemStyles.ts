import {Dimensions, Platform, StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

const deviceWidth = Dimensions.get("window").width;

export const invitationItemStyles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 10,
            marginBottom: 10,
            borderWidth: 2,
            borderRadius: 5,
            backgroundColor: COLORS.event.orange100,
            borderColor: COLORS.event.orange300,
            overflow: Platform.OS === "android" ? "hidden" : "visible",
        },
        invitation: {
            flex: 1,
            height: 120,
            width: deviceWidth - 20,
            paddingLeft: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
        },
        userProfilePic: {
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: COLORS.universal.black,
            backgroundColor: COLORS.universal.white
        },
        detailsContainer: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        detailsText: {
            color: COLORS.universal.white,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center"
        },
        statusText: {

        },
        locationText: {
            color: COLORS.universal.green500,
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        },
        // actionsContainer: {
        //     marginTop: 10,
        //     flexDirection: "row",
        // },
        // accept: {
        //     height: 40,
        //     width: 40,
        //     marginHorizontal: 20,
        //     backgroundColor: COLORS.universal.green500
        // },
        // reject: {
        //     height: 40,
        //     width: 40,
        //     marginHorizontal: 20,
        //     backgroundColor: COLORS.universal.red500
        // },
        rippleAndroid: {
            color: "#CCCCCC"
        },
        cardPressed: {
            opacity: 0.75
        }
    }
);
