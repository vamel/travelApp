import {View, Text, SafeAreaView, ScrollView} from "react-native";
import {useCallback, useEffect, useState} from "react";
import {attractionPageStyles} from "../styles/pages/attractionPageStyles";
import {dateToString, getDateElements} from "../utils/dateUtils";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const EventPage = ({route}) => {
    const [eventData, setEventData] = useState(null);
    const [dateString, setDateString] = useState("");

    const receivedData = {
        name: route.params.name,
        description: route.params.description,
        date: route.params.date
    };

    useEffect(() => {
        const [day, month, year] = getDateElements(route.params.date);
        const dateString = dateToString(day, month, year);
        setDateString(dateString);
        //@ts-ignore
        setEventData(receivedData);
    }, [receivedData.name]);

    const onLayoutRootView = useCallback(async () => {
        if (eventData) {
            await SplashScreen.hideAsync();
        }
    }, [eventData]);

    if (!eventData) {
        return null;
    }

    return(
        <SafeAreaView style={attractionPageStyles.attractionPage} onLayout={onLayoutRootView}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={attractionPageStyles.title}>
                        {eventData.name}
                    </Text>
                </View>
                <View style={attractionPageStyles.detailsContainer}>
                    <Text style={attractionPageStyles.detailsTitle}>Location:</Text>
                    <Text style={attractionPageStyles.detailsText}>
                        LOCATION PLACEHOLDER
                    </Text>
                    <Text style={attractionPageStyles.detailsTitle}>Date:</Text>
                    <Text style={attractionPageStyles.detailsText}>
                        {dateString}
                    </Text>
                    <Text style={attractionPageStyles.detailsTitle}>Description:</Text>
                    <Text style={attractionPageStyles.detailsText}>
                        {eventData.description}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default EventPage;
