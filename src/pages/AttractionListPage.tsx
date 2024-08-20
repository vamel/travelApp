import {useState, useEffect} from "react";
import {View, Text, FlatList, Pressable, SafeAreaView} from "react-native";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/config";
import {Attraction } from "../models/interfaces/Attraction";
import AttractionCard from "../components/attraction/AttractionCard";
import attractionListPageStyles from "../styles/pages/AttractionListPageStyles";
import attractionCardStyles from "../styles/components/AttractionCardStyles";

const AttractionListPage = (props) => {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const attrSnapshot = await getDocs(collection(db, "attractions"));
            const attrList: any = attrSnapshot.docs.map(doc => doc.data());
            setAttractions(attrList);
        }
        getData();
    }, []);

    const renderAttractionCard = (attraction) => {
        const handleCardPress = () => {
            props.navigation.navigate("AttractionPage",
                {
                    attractionData: attraction
                })
        };

        return (
            <View style={attractionCardStyles.container}>
                <Pressable
                    onPress={handleCardPress}
                    android_ripple={attractionListPageStyles.rippleAndroid}
                    style={({pressed}) => pressed ? attractionListPageStyles.buttonPressed : null}
                >
                    <AttractionCard
                        imageUrl={attraction.images_url[0]}
                        name={attraction.name}
                    />
                </Pressable>
            </View>
        );
    }

    return (
        <SafeAreaView style={attractionListPageStyles.container}>
            <Text style={attractionListPageStyles.titleText}>Attractions in Warsaw</Text>
            <View style={[attractionListPageStyles.items]}>
                <FlatList
                    initialNumToRender={10}
                    data={attractions}
                    keyExtractor={(item: Attraction) => item.name}
                    renderItem={({ item }: {item: Attraction}) => renderAttractionCard(item)}
                    contentContainerStyle={attractionListPageStyles.listContainer}
                />
            </View>
        </SafeAreaView>
    );
}

export default AttractionListPage;
