import {Image, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../firebase/config";
import cardStyles from "../../styles/components/attraction/cardStyles";

interface IUserCard {
    imageUrl: string,
    inviterName: string,
    status: string,
    date: string,
    time: string
}

const UserCard = (props: IUserCard, {route}) => {
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
                <Text style={cardStyles.text}>{props.inviterName}</Text>
                <Text style={cardStyles.text}>Status: {props.status}</Text>
                <Text style={cardStyles.text}>{props.date}</Text>
                <Text style={cardStyles.text}>{props.time}</Text>
            </View>
        </View>
    );
}

export default UserCard;
