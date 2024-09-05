import {FlatList, SafeAreaView, ScrollView, Text, View} from "react-native";
import {nearbyUsersPageStyles} from "../styles/pages/nearbyUsersPageStyles";
import UserCard from "../components/usersnearby/UserCard";
import {useEffect, useState} from "react";
import {collection} from "firebase/firestore";
import {db} from "../firebase/config";

const NearbyUsersPage = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const userRef = collection(db, "users");
    }, [])

    const renderUserCard = () => {
        return(
            <UserCard />
        );
    }

    return(
        <SafeAreaView style={nearbyUsersPageStyles.container}>
            <View>
                <Text style={nearbyUsersPageStyles.titleText}>Nearby users</Text>
                <FlatList
                    data={userList}
                    renderItem={renderUserCard}
                />
            </View>
        </SafeAreaView>
    );
}

export default NearbyUsersPage;
