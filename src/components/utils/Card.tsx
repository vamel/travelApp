import { View, Text } from "react-native";
import cardStyles from "./styles/Card";

const Card = () => {
    return (
        <View style={cardStyles.container}>
            <Text>Random text here!</Text>
        </View>
    );
}

export default Card;