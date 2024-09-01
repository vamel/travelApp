import {View, TextInput, Pressable} from "react-native";
import {attractionSearchBarStyles} from "../../styles/components/attraction/attractionSearchBarStyles";
import {Ionicons} from "@expo/vector-icons";

interface IAttractionSearchBarProps {
    onPress: () => void,
    onChangeText: (string) => void
}

const AttractionSearchBar = (props: IAttractionSearchBarProps) => {
    return(
        <View style={attractionSearchBarStyles.container}>
            <TextInput
                style={attractionSearchBarStyles.searchInput}
                maxLength={40}
                placeholder={"Enter city name"}
                keyboardType={"default"}
                onChangeText={props.onChangeText}
            />
            <Pressable
                onPress={props.onPress}
                style={attractionSearchBarStyles.button}
            >
                <View style={attractionSearchBarStyles.iconContainer}>
                    <Ionicons name={"search"} size={20} style={attractionSearchBarStyles.icon} />
                </View>
            </Pressable>
        </View>
    );
}

export default AttractionSearchBar;
