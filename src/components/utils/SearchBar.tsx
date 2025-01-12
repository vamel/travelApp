import {View, TextInput, Pressable} from "react-native";
import {searchBarStyles} from "../../styles/components/utils/searchBarStyles";
import {Ionicons} from "@expo/vector-icons";

interface ISearchBarProps {
    onPress: () => void,
    onChangeText: (string) => void,
    placeholderText: string,
    width: number
}

const SearchBar = (props: ISearchBarProps) => {

    return(
        <View style={[searchBarStyles.container, {width: props.width}]}>
            <TextInput
                style={[searchBarStyles.searchInput, {width: (props.width - 60)}]}
                maxLength={40}
                placeholder={props.placeholderText}
                keyboardType={"default"}
                onChangeText={props.onChangeText}
            />
            <Pressable
                onPress={props.onPress}
                style={searchBarStyles.button}
            >
                <View style={searchBarStyles.iconContainer}>
                    <Ionicons name={"search"} size={20} style={searchBarStyles.icon} />
                </View>
            </Pressable>
        </View>
    );
}

export default SearchBar;
