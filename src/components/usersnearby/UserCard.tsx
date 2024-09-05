import {Image, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../firebase/config";
import {userCardStyles} from "../../styles/components/usersnearby/userCardStyles";

interface IUserCard {
    imageUrl: string,
    username: string,
}

const UserCard = (props: IUserCard, {route}) => {
    const [imageUrl, setImageUrl] = useState('');

    // useEffect(() => {
        // const getImage = async () => {
        //     const gsReference = ref(storage, props.imageUrl);
        //     await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
        // }
        // getImage();
    // }, []);

    return(
        <View style={userCardStyles.userCard}>
            <View style={userCardStyles.imageContainer}>
                <Image
                    // source={{ uri: imageUrl !== "" ? imageUrl : require("../../assets/images/user-placeholder.png")}}
                    source={require("../../assets/images/user-placeholder.png")}
                    style={userCardStyles.image}
                />
            </View>
            <View style={userCardStyles.textContainer}>
                <Text style={userCardStyles.text}>{props.username}</Text>
            </View>
        </View>
    );
}

export default UserCard;
