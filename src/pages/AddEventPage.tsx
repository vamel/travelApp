import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {useContext, useState} from "react";
import {Event} from "../models/classes/Event";
import {Coords} from "../models/classes/Coords";
import {addEventPageStyles} from "../styles/pages/addEventPageStyles";
import InputField from "../components/utils/InputField";
import InvitationDatePicker from "../components/invitations/InvitationDatePicker";
import InvitationLocationPicker from "../components/invitations/InvitationLocationPicker";
import ProfileButton from "../components/userprofile/ProfileButton";
import {createEvent} from "../firebase/manageEvent";
import {EventContext} from "../store/events/event-context";

const AddEventPage = ({route, navigation}) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [errorMsg, setErrorMsg] = useState("");
    const [eventData, setEventData] = useState<Event>({
        city: "",
        coords: new Coords("", ""),
        date: new Date(),
        description: "",
        name: "",
        organiser: ""
    });

    const eventCtx = useContext(EventContext);

    const onEventNameChange = (name: string) => {
        setEventData({...eventData, name: name});
    }

    const onEventCityChange = (city: string) => {
        setEventData({...eventData, city: city});
    }

    const onEventOrganiserChange = (organiser: string) => {
        setEventData({...eventData, organiser: organiser});
    }

    const onEventDescriptionChange = (description: string) => {
        setEventData({...eventData, description: description});
    }

    const onDateChange = (event, selectedDate) => {
        setIsDatePickerOpen(false);
        setSelectedDate(selectedDate);
    }

    const onTimeChange = (event, selectedTime) => {
        setIsTimePickerOpen(false);
        setSelectedDate(selectedTime);
    }

    const handleDateButtonClick = () => {
        setIsDatePickerOpen((prevState => !prevState));
    }

    const handleTimeButtonClick = () => {
        setIsTimePickerOpen((prevState => !prevState));
    }

    const checkIfValid = () => {
        return (route.params?.pickedLat && route.params?.pickedLon
        && eventData.city && eventData.name && selectedDate && eventData.description && eventData.organiser);
    }

    const onSubmit = () => {
        if (!checkIfValid()) {
            setErrorMsg("Fill all fields!");
            return;
        }
        eventData.date = selectedDate;
        eventData.coords = {lat: route.params.pickedLat, lon: route.params.pickedLon};
        createEvent(eventData);
        eventCtx.fetchMore();
        navigation.goBack();
    }

    return(
        <SafeAreaView style={addEventPageStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={addEventPageStyles.titleContainer}>
                    <Text style={addEventPageStyles.title}>Add new event</Text>
                    <Text style={addEventPageStyles.subtitle}>Fill all the information below</Text>
                </View>
                <InputField
                    title={"What event is it?"}
                    onChangeText={onEventNameChange}
                    value={eventData.name}
                    maxLength={50}
                    keyboardType={"default"}
                />
                <InputField
                    title={"In which city will it happen?"}
                    onChangeText={onEventCityChange}
                    value={eventData.city}
                    maxLength={50}
                    keyboardType={"default"}
                />
                <InputField
                    title={"Who is organising it?"}
                    onChangeText={onEventOrganiserChange}
                    value={eventData.organiser}
                    maxLength={50}
                    keyboardType={"default"}
                />
                <InputField
                    title={"Add description"}
                    onChangeText={onEventDescriptionChange}
                    value={eventData.description}
                    maxLength={500}
                    keyboardType={"default"}
                />
                <InvitationDatePicker
                    invitationDate={selectedDate}
                    isDatePickerOpen={isDatePickerOpen}
                    isTimePickerOpen={isTimePickerOpen}
                    onDateButtonPress={handleDateButtonClick}
                    onTimeButtonPress={handleTimeButtonClick}
                    onInvitationDateChange={onDateChange}
                    onInvitationTimeChange={onTimeChange}
                />
                <View style={addEventPageStyles.mapContainer}>
                    <InvitationLocationPicker navigateTo={"AddEventPage"} />
                </View>
                <View style={addEventPageStyles.buttonContainer}>
                    {errorMsg && <Text style={addEventPageStyles.errorText}>{errorMsg}</Text>}
                    <ProfileButton icon={"paper-plane"} color={"orange"} onPress={onSubmit} text={"Submit"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AddEventPage;