import { useState, useEffect } from "react";
import {View, FlatList, Pressable} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Attraction } from "../models/interfaces/Attraction";
import AttractionCard from "../components/main/AttractionCard";
import attractionListPageStyles from "../styles/pages/AttractionListPageStyles";

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
            <Pressable onPress={handleCardPress}>
                <AttractionCard
                    imageUrl={attraction.images_url[0]}
                    name={attraction.name}
                />
            </Pressable>
        );
    }

    return (
        <View style={attractionListPageStyles.list}>
            <View style={attractionListPageStyles.items}>
                <FlatList
                    data={attractions}
                    keyExtractor={(item: Attraction) => item.name}
                    renderItem={({ item }: {item: Attraction}) => renderAttractionCard(item)}
                />
            </View>
        </View>
    );
}

export default AttractionListPage;
