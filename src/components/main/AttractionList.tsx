import Card from "../utils/Card";
import { View, StyleSheet, FlatList } from "react-native";

const AttractionList = () => {
    return (
    <View>
        <Card />
        <Card />
        <Card />
        <Card />
    </View>
    );
}

const AttractionListStyles = StyleSheet.create(
    {
        list: {
            margin: 8,
            padding: 8,
            width: '85%',
            flexDirection: 'column',
        }
    }
)

export default AttractionList;