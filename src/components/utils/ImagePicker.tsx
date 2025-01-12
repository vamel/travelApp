import {launchImageLibraryAsync, PermissionStatus, useMediaLibraryPermissions} from "expo-image-picker";
import {useState} from "react";
import {Alert, Image, View} from "react-native";
import ProfileButton from "../userprofile/ProfileButton";
import {profilePictureImagePickerStyles} from "../../styles/components/register/profilePictureImagePickerStyles";

interface IProfilePictureImagePickerProps {
    onSelectImage: (uri: string) => void;
    buttonText: string;
}

const ProfilePictureImagePicker = (props: IProfilePictureImagePickerProps) => {
    const [mediaLibraryPermissionInformation, requestPermission] = useMediaLibraryPermissions();
    const [pickedImageUri, setPickedImageUri] = useState("");

    async function verifyPermissions() {
        //@ts-ignore
        if (mediaLibraryPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (mediaLibraryPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions. Please grant access to media library to use this feature.");
            return false;
        }

        return true;
    }

    async function handlePickImageButton() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8
        });

        // @ts-ignore
        setPickedImageUri(image.assets[0].uri);
        //@ts-ignore
        props.onSelectImage(image.assets[0].uri);
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

export default ProfilePictureImagePicker;
