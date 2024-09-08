import {FlatList, Pressable, SafeAreaView, Text, View} from "react-native";
import {nearbyUsersPageStyles} from "../styles/pages/nearbyUsersPageStyles";
import UserCard from "../components/usersnearby/UserCard";
import {useCallback, useContext, useEffect, useState} from "react";
import {collection, getDocs, limit, query, where, orderBy, documentId} from "firebase/firestore";
import {db} from "../firebase/config";
import {AuthContext} from "../store/user/auth-context";
import * as SplashScreen from 'expo-splash-screen';
import {toTitle} from "../utils/stringUtils";
import {UserDTO} from "../models/classes/UserDTO";
import {userCardStyles} from "../styles/components/usersnearby/userCardStyles";

SplashScreen.preventAutoHideAsync();

const UsersNearbyPage = ({navigation}) => {
    const [userList, setUserList] = useState([]);
    const [finishFetch, setFinishFetch] = useState(false);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            const userRef = collection(db, "users");
            const q = query(userRef, where("last_location", "==", authCtx.location),
                where(documentId(), "!=", authCtx.uid), limit(5), orderBy(documentId()));
            const querySnapshot = await getDocs(q);
            const receivedUsers = querySnapshot.docs.map((doc) => {
                return {uid: doc.id, ...doc.data()}
            });
            setUserList(receivedUsers);
        }
        getData();
        setFinishFetch(true);
    }, [finishFetch])

    const onLayoutRootView = useCallback(async () => {
        if (finishFetch) {
            await SplashScreen.hideAsync();
        }
    }, [finishFetch]);

    if (!finishFetch) {
        return null;
    }

    const renderUserCard = (user) => {
        const handleCardPress = () => {
            navigation.navigate("OtherUserPage",
                {
                    userUid: user.uid
                });
        }

        return(
            <View style={userCardStyles.container} key={user.username}>
                <Pressable
                    onPress={handleCardPress}
                    android_ripple={nearbyUsersPageStyles.rippleAndroid}
                    style={({pressed}) => pressed ? nearbyUsersPageStyles.buttonPressed : null}
                >
                    <UserCard imageUrl={""} username={user.username} />
                </Pressable>
            </View>
        );
    }

    return(
        <SafeAreaView style={nearbyUsersPageStyles.container} onLayout={onLayoutRootView}>
            <View>
                <Text style={nearbyUsersPageStyles.titleText}>Users in {toTitle(authCtx.location)}</Text>
                <FlatList
                    initialNumToRender={10}
                    data={userList}
                    renderItem={({ item }: {item: UserDTO}) => renderUserCard(item)}
                    keyExtractor={(item: UserDTO) => item.username}
                    contentContainerStyle={nearbyUsersPageStyles.listContainer}
                    // onEndReachedThreshold={0.35}
                    // onEndReached={fetchMoreData}
                />
            </View>
        </SafeAreaView>
    );
}

export default UsersNearbyPage;
