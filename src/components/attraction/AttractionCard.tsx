import {View, Image, Text} from "react-native";
import {useEffect, useState} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../firebase/config";
import cardStyles from "../../styles/components/attraction/cardStyles";

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
        <View style={cardStyles.attractionCard}>
            <View style={cardStyles.imageContainer}>
                <Image source={{ uri: imageUrl !== "" ? imageUrl : undefined }} style={cardStyles.image}/>
            </View>
            <View style={cardStyles.textContainer}>
                <Text style={cardStyles.text}>{props.name}</Text>
                <Text style={cardStyles.distanceText}>X m away</Text>
            </View>
        </View>
    );
}

export default AttractionCard;
