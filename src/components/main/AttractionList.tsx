import { useState, useEffect } from "react";
import Card from "../utils/Card";
import { View, StyleSheet, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Attraction } from "../../models/interfaces/Attraction";

const AttractionList = () => {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        async function getData() {
            const attrSnapshot = await getDocs(collection(db, "attractions"));
            const attrList: any = attrSnapshot.docs.map(doc => doc.data());
            setAttractions(attrList);
        }
        getData();
    }, []);
    return (
        <View style={attractionListStyles.list}>
            <FlatList
                data={attractions}
                renderItem={({item}: {item: Attraction}) => (
                    <Card message={item.name} imageUrl={item.imagesUrl[0]} />
                )}
            />
        </View>
    );
}

const attractionListStyles = StyleSheet.create(
    {
        list: {
            margin: 8,
            padding: 8,
            flexDirection: 'column',
        }
    }
)

export default AttractionList;