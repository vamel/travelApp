import { Attraction } from "../../models/interfaces/Attraction";
import {ScrollView, StyleSheet, View, Text, Image, Button, Modal} from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase/config";
import IconButton from "../utils/styles/IconButton";

const AttractionPage = ({navigation, route}) => {
    const [attraction, setAttraction] = useState<Attraction>(new Attraction("", "", []));
    const [imageUrl, setImageUrl] = useState('');
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const getAttraction = () => {
            const receivedData = route.params.attractionData;
            const data: Attraction = new Attraction(receivedData.name, receivedData.description, receivedData.images_url);
            setAttraction(data);
        }
        getAttraction();

        const getImage = async () => {
            const gsReference = ref(storage, route.params.attractionData.images_url[0]);
            await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
        }
        getImage();
    }, []);

    const headerButtonPressHandler = () => {
        setIsFavourite((isFavourite) => !isFavourite);
        alert("Added to favourites");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: attraction.name,
            headerRight: () => {
                return (
                <IconButton
                    onPress={headerButtonPressHandler}
                    icon={"star"}
                    color={isFavourite ? "gold" : "grey"}/>
                );
            }
        })
    }, [navigation, attraction, isFavourite]);


    return (
        <View style={attractionPageStyles.attractionPage}>
            <View style={attractionPageStyles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={attractionPageStyles.image}/>
            </View>
            <View style={attractionPageStyles.attractionDetailsContainer}>
                <ScrollView>
                    <View>
                        <Text style={attractionPageStyles.text}>NAME</Text>
                        <Text style={attractionPageStyles.text}>{attraction.name}</Text>
                    </View>
                    <View>
                        <Text style={attractionPageStyles.text}>DESCRIPTION</Text>
                        <Text style={attractionPageStyles.text}>{attraction.description}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const attractionPageStyles = StyleSheet.create(
    {
        attractionPage: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        },
        imageContainer: {
            alignItems: 'stretch',
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
        },
        image: {
            height: 245,
            width: 300,
            borderRadius: 5,
            overflow: 'hidden'
        },
        attractionDetailsContainer: {
            flex: 1
        },
        text: {

        }
    }
)

export default AttractionPage;
