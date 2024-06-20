import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Attraction } from "../../models/interfaces/Attraction";
import AttractionCard from "./AttractionCard";

const AttractionList = () => {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const attrSnapshot = await getDocs(collection(db, "attractions"));
            const attrList: any = attrSnapshot.docs.map(doc => doc.data());
            setAttractions(attrList);
        }
        getData();
    }, []);

    return (
        <View style={attractionListStyles.list}>
            <View style={attractionListStyles.items}>
                <FlatList
                    data={attractions}
                    keyExtractor={(item: Attraction) => item.name}
                    renderItem={({ item }: {item: Attraction}) => (
                        <AttractionCard
                            imageUrl={item.images_url[0]}
                            name={item.name}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const attractionListStyles = StyleSheet.create(
    {
        list: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        },

        items: {
            padding: 0,
            alignItems: 'stretch',
            flexDirection: 'column',
            flex: 10,
        }
    }
)

export default AttractionList;
