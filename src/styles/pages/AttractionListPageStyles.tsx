import {StyleSheet} from "react-native";

const attractionListPageStyles = StyleSheet.create(
    {
        list: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        },

        items: {
            padding: 0,
            alignItems: 'stretch',
            flexDirection: 'column',
            flex: 10,
        }
    }
)

export default attractionListPageStyles;
