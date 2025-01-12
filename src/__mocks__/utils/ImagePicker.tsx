import {useState} from "react";
import {Image, View} from "react-native";
import ProfileButton from "../../components/userprofile/ProfileButton";
import {profilePictureImagePickerStyles} from "../../styles/components/register/profilePictureImagePickerStyles";

interface IProfilePictureImagePickerProps {
    onSelectImage: (uri: string) => void;
    buttonText: string;
}

const ImagePicker = (props: IProfilePictureImagePickerProps) => {
    const [pickedImageUri, setPickedImageUri] = useState("");

    async function handlePickImageButton() {
        setPickedImageUri("mock-uri");
    }

    return(
        <View style={profilePictureImagePickerStyles.container}>
            <ProfileButton
                icon={"image-sharp"}
                color={"orange"}
                onPress={handlePickImageButton}
                text={props.buttonText}
            />
            {pickedImageUri && <Image source={{uri: pickedImageUri}} style={profilePictureImagePickerStyles.profilePicture} />}
        </View>
    );
}

export default ImagePicker;
