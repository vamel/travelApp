import {useContext, useEffect, useState} from "react";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";
import {AuthContext} from "../../store/user/auth-context";
import {getCoordsFromCity, getMapPreview} from "../../firebase/location";
import {View, Text, Image} from "react-native";
import ProfileButton from "../userprofile/ProfileButton";
import {invitationLocationPickerStyles} from "../../styles/components/invitation/invitationLocationPickerStyles";

interface IInvitationLocationPickerProps {
    navigateTo: string;
}

const InvitationLocationPicker = (props: IInvitationLocationPickerProps) => {
    const [pickedLocation, setPickedLocation] = useState(null);
    const [initialLocation, setInitialLocation] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        //@ts-ignore
        if (isFocused && route.params?.pickedLat && route.params?.pickedLon) {
            //@ts-ignore
            setPickedLocation({
                lat: route.params.pickedLat,
                lon: route.params.pickedLon
            });
        }
    }, [route, isFocused]);

    useEffect(() => {
        async function handleLocation() {
            const coords = await getCoordsFromCity(authCtx.location);
            //@ts-ignore
            setInitialLocation({
                initialLat: coords.lat,
                initialLon: coords.lon
            });
        }

        handleLocation();
    }, []);

    const pickOnMapHandler = () => {
        //@ts-ignore
        navigation.navigate("MapPage", {
            ...route.params,
            navigateTo: props.navigateTo,
            initialLat: initialLocation.initialLat,
            initialLon: initialLocation.initialLon
        });
    }

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
                    onPress={pickOnMapHandler}
                    color={"orange"}
                    text={"Pick location"}
                />
            </View>
        </View>
    );
}

export default InvitationLocationPicker;
