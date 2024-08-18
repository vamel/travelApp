import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

const UserPage = () => {
    const navigation = useNavigation();

    const handleEmergencyNumbersButtonPress = () => {
        // @ts-ignore
        navigation.navigate("EmergencyNumbersPage");
    }

    return(
        <View>
            <Text>User page</Text>
            <Button title={"Emergency numbers"} onPress={handleEmergencyNumbersButtonPress}/>
        </View>
    );
}

export default UserPage;
