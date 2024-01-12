import { useState, useEffect } from "react";
import Card from "../utils/Card";
// import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Attraction } from "../../models/interfaces/Attraction";
import PageGrid from "../utils/PageGrid";

const AttractionList = () => {
    const [attractions, setAttractions] = useState([]);
    // const route = useRoute();

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
            <View style={{ width: Dimensions.get('window').width, backgroundColor: '#d9a957', flex: 1}}>
                <Text style={{paddingTop: 20, textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Attractions in Warsaw</Text>
            </View>
            <View style={{flex: 9, alignItems: 'center'}}>
                <FlatList
                    data={attractions}
                    renderItem={({ item }: { item: Attraction }) => (
                        <>
                        {/* <Card message={item.name} imageUrl={item.images_url[0]} /> */}
                        <PageGrid imageUrl={item.images_url[0]} details={{name:item.name, description:item.description, images_url:item.images_url}} ></PageGrid>
                        </>
                    )}
                />
            </View>
        </View>
    );
}

const attractionListStyles = StyleSheet.create(
    {
        list: {
            // margin: 8,
            // padding: 8,
            flexDirection: 'column',
        }
    }
)

export default AttractionList;