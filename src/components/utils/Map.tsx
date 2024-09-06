import {View, Image, Text} from "react-native";
import {mapStyles} from "../../styles/components/utils/mapStyles";
import {Coords} from "../../models/classes/Coords";
import {getAddress, getMapPreview} from "../../firebase/location";
import {useEffect, useState} from "react";

interface IMapProps {
    coordinates: Coords
}

const Map = (props: IMapProps) => {
    const [address, setAddress] = useState("");

    useEffect(() => {
        const getAddressFromCoords = async () => {
            const address = await getAddress(props.coordinates.lat, props.coordinates.lon);
            setAddress(address);
        }
        getAddressFromCoords();
    }, [props.coordinates.lat, props.coordinates.lon]);

    return(
        <View style={mapStyles.mapContainer}>
            <Text style={mapStyles.detailsTitle}>Location:</Text>
            <View style={mapStyles.mapPreview}>
                <Image
                    style={mapStyles.image}
                    source={{uri: getMapPreview(props.coordinates.lat, props.coordinates.lon)}}
                />
            </View>
            <Text style={mapStyles.addressText}>{address}</Text>
        </View>
    );
}

export default Map;
