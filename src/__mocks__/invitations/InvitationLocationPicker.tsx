import {useState} from "react";
import {getMapPreview} from "../../firebase/location";
import {View, Text, Image} from "react-native";
import ProfileButton from "../../components/userprofile/ProfileButton";
import {invitationLocationPickerStyles} from "../../styles/components/invitation/invitationLocationPickerStyles";

const InvitationLocationPicker = () => {
    const [pickedLocation, setPickedLocation] = useState({lat: 20, lon: 20});

    let locationPreview = <Text>No location picked yet.</Text>;

    if (pickedLocation) {
        locationPreview = <Image
            style={invitationLocationPickerStyles.image}
            source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lon)}}
        />;
    }

    return(
        <View>
            <View style={invitationLocationPickerStyles.mapPreview}>
                {locationPreview}
            </View>
            <View style={invitationLocationPickerStyles.actions}>
                <ProfileButton
                    icon={"location"}
                    onPress={() => {}}
                    color={"orange"}
                    text={"Pick location"}
                />
            </View>
        </View>
    );
}

export default InvitationLocationPicker;
