import {View, Image, Text} from "react-native";
import {useEffect, useState} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../firebase/config";
import {attractionCardStyles} from "../../styles/components/attraction/attractionCardStyles";

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
                <Image source={{ uri: imageUrl !== "" ? imageUrl : undefined }} style={attractionCardStyles.image}/>
            </View>
            <View style={attractionCardStyles.textContainer}>
                <Text style={attractionCardStyles.text}>{props.name}</Text>
                {/*<Text style={attractionCardStyles.distanceText}>X m away</Text>*/}
            </View>
        </View>
    );
}

export default AttractionCard;
