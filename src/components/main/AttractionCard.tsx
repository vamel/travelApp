import {View, StyleSheet, Image, Text} from "react-native";
import {useEffect, useState} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../firebase/config";

interface IAttractionCard {
    imageUrl: string,
    name: string
}

const AttractionCard = (props: IAttractionCard) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const getImage = async () => {
            const gsReference = ref(storage, props.imageUrl);
            await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
        }
        getImage();
    }, []);

    return(
        <View style={attractionCardStyles.attractionCard}>
            <View style={attractionCardStyles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={attractionCardStyles.image}/>
            </View>
            <View style={attractionCardStyles.textContainer}>
                <Text style={attractionCardStyles.text}>{props.name}</Text>
            </View>
        </View>
    );
}

const attractionCardStyles = StyleSheet.create(
    {
        attractionCard: {
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10,
            paddingBottom: 5,
            borderRadius: 5,
            backgroundColor: "#e3dddc",
        },
        imageContainer: {
            alignItems: 'stretch',
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
        },
        image: {
            height: 245,
            borderRadius: 5,
            overflow: 'hidden'
        },
        textContainer: {
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
        },
        text: {
            fontSize: 30,
            fontFamily: "Roboto",
            textAlign: "center"
        }
    }
)

export default AttractionCard;
