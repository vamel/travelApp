import {View, Text, SafeAreaView} from "react-native";
import {useCallback, useContext, useEffect, useState} from "react";
import {dateToString, dateToTime, getDateElements, getTimeElements} from "../utils/dateUtils";
import * as SplashScreen from 'expo-splash-screen';
import {eventPageStyles} from "../styles/pages/eventPageStyles";
import {Event} from "../models/classes/Event";
import {parseCoords} from "../firebase/parseAttractionData";
import Map from "../components/utils/Map";
import RegisterButton from "../components/register/RegisterButton";
import {AuthContext} from "../store/user/auth-context";

SplashScreen.preventAutoHideAsync();

const EventPage = ({route}) => {
    const [eventData, setEventData] = useState<Event>(null);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const receivedData = route.params.eventData;
        setEventData(receivedData);
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (eventData) {
            await SplashScreen.hideAsync();
        }
    }, [eventData]);

    if (!eventData) {
        return null;
    }

    return(
        <SafeAreaView style={eventPageStyles.container} onLayout={onLayoutRootView}>
            <View>
                <Text style={eventPageStyles.title}>{eventData.name}</Text>
                <Text style={eventPageStyles.organiserText}>Organised by {eventData.organiser}</Text>
                <View style={eventPageStyles.detailsContainer}>
                    <Text style={eventPageStyles.detailsTitle}>Date</Text>
                    <Text style={eventPageStyles.detailsText}>
                        {`${dateToString(...getDateElements(eventData.date))}`}
                    </Text>
                    <Text style={eventPageStyles.detailsTitle}>Time</Text>
                    <Text style={eventPageStyles.detailsText}>
                        {`${dateToTime(...getTimeElements(eventData.date))}`}
                    </Text>
                    <Text style={eventPageStyles.detailsTitle}>Description:</Text>
                    <Text style={eventPageStyles.detailsText}>
                        {eventData.description}
                    </Text>
                </View>
                <Map coordinates={parseCoords(eventData.coords)} />
                {authCtx.isAuthenticated && authCtx.user.is_admin && <RegisterButton
                    title={"Delete"}
                    onPress={() => console.log("remove")}
                />}
            </View>
        </SafeAreaView>
    );
}

export default EventPage;
