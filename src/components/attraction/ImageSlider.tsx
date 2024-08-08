import {View, Image} from "react-native";
import {useEffect, useState} from "react";

const ImageSlider = (props) => {
    const [images, setImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState<String>("");

    useEffect(() => {
        async function getImages() {
            const imageList: string[] = props.images;
            await setImages(imageList);
            await setCurrentImage(imageList[0])
        }
        getImages();
    }, []);

    return(
        <View>
            <Image source={{ uri: currentImage }}/>
        </View>
    )
}

export default ImageSlider;
