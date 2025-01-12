import {useCallback, useLayoutEffect, useState} from "react";
import {Alert, StyleSheet} from "react-native";
import ProfileButton from "../components/userprofile/ProfileButton";
import MapView, {Marker} from "react-native-maps";

const MapPage = ({navigation, route}) => {
    const initialLocation = route.params.initialLat && route.params.initialLon && {
        lat: route.params.initialLat,
        lon: route.params.initialLon
    };

    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.lon : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.421
    }

    const selectLocationHandler = (event) => {
        const lat = event.nativeEvent.coordinate.latitude;
        const lon = event.nativeEvent.coordinate.longitude;

        //@ts-ignore
        setSelectedLocation({lat: lat, lon: lon});
    }

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert("No location picked.");
            return;
        }

        if (route.params.navigateTo === "CreateInvitationPage") {
            navigation.navigate("CreateInvitationPage", {
                ...route.params,
                pickedLat: selectedLocation.lat,
                pickedLon: selectedLocation.lon
            });
        }
        else if (route.params.navigateTo === "AddEventPage") {
            navigation.navigate("AddEventPage", {
                ...route.params,
                pickedLat: selectedLocation.lat,
                pickedLon: selectedLocation.lon
            });
        }
        else if (route.params.navigateTo === "AddAttractionPage") {
            navigation.navigate("AddAttractionPage", {
                ...route.params,
                pickedLat: selectedLocation.lat,
                pickedLon: selectedLocation.lon
            });
        }

    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <ProfileButton
                icon={"save"}
                color={"orange"}
                text={"Confirm"}
                onPress={savePickedLocationHandler}
            />
        });
    }, [navigation, savePickedLocationHandler]);

    return(
        <MapView
            initialRegion={region}
            style={styles.map}
            onPress={selectLocationHandler}
        >
            {selectedLocation && (
                <Marker
                    title={"Meeting point"}
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lon
                    }}
                />)}
        </MapView>
    );
}

export default MapPage;

const styles = StyleSheet.create(
    {
        map: {
            flex: 1
        }
    }
);
