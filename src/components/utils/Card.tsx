import { View, Text, Image } from "react-native";
import cardStyles from "./styles/Card";
import { useEffect, useState } from "react";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref } from "firebase/storage";

interface CardProps {
    message: string;
    imageUrl: string;
}

const Card = (props: CardProps) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        async function getImage() {
            const gsReference = ref(storage, props.imageUrl);
            await getDownloadURL(gsReference).then(result => setImageUrl(result));
        }
        getImage();
    }, []);

    return (
        <View style={cardStyles.container}>
            <Image source={{uri: imageUrl}}/>
            <Text>{props.message}</Text>
        </View>
    );
}

export default Card;