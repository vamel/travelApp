import {Dimensions, StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface INavBar {
    place: string
}

const NavBar = (props: INavBar) => {

    return(
        <View style={navBarStyles.navBar}>
            <MaterialCommunityIcons name="forwardburger" size={50} style={navBarStyles.icon}/>
            <Text style={navBarStyles.text}>{props.place}</Text>
        </View>
    );
}

const navBarStyles = StyleSheet.create(
    {
        navBar: {
            width: Dimensions.get('window').width,
            flexDirection: "row",
            backgroundColor: '#d9a957',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 20
        },
        icon: {
            flex: 1,
            color: "black"
        },
        text: {
            flex: 4,
            textAlign: 'right',
            fontSize: 30,
            fontWeight: 'bold'
        }
    }
)

export default NavBar;
