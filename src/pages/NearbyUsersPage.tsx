import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {nearbyUsersPageStyles} from "../styles/pages/nearbyUsersPageStyles";

const NearbyUsersPage = () => {
    return(
        <SafeAreaView style={nearbyUsersPageStyles.container}>
            <ScrollView>
                <Text style={nearbyUsersPageStyles.titleText}>Nearby users</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default NearbyUsersPage;
