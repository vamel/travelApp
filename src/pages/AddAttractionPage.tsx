import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {addAttractionPageStyles} from "../styles/pages/AddAttractionPageStyles";
import ImagePicker from "../components/utils/ImagePicker";
import InputField from "../components/utils/InputField";
import {Attraction} from "../models/classes/Attraction";
import {useContext, useState} from "react";
import {Coords} from "../models/classes/Coords";
import {OpeningHours} from "../models/classes/OpeningHours";
import {TicketPrices} from "../models/classes/TicketPrices";
import IsAccessibleSwitch from "../components/attraction/IsAccessibleSwitch";
import AttractionTicketTypesInput from "../components/attraction/AttractionTicketTypesInput";
import AttractionOpeningHoursInput from "../components/attraction/AttractionOpeningHoursInput";
import InvitationLocationPicker from "../components/invitations/InvitationLocationPicker";
import ProfileButton from "../components/userprofile/ProfileButton";
import {AttractionContext} from "../store/attractions/attracion-context";
import {createAttraction} from "../firebase/manageAttraction";

const AddAttractionPage = ({route, navigation}) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [attractionData, setAttractionData] = useState<Attraction>({
        city: "",
        coords: new Coords("", ""),
        description: "",
        images_url: [],
        is_accessible_for_disabled: true,
        name: "",
        opening_hours: new OpeningHours("", "", "", "", "", "", ""),
        ticket_prices: new TicketPrices("", "", "", "", "")
    });

    const attrCtx = useContext(AttractionContext);

    const onAttractionImageChange = (pictureUri: string) => {
        setAttractionData({...attractionData, images_url: [pictureUri]});
    }

    const onAttractionNameChange = (attractionName: string) => {
        setAttractionData({...attractionData, name: attractionName});
    }

    const onCityNameChange = (cityName: string) => {
        setAttractionData({...attractionData, city: cityName.toLowerCase()});
    }

    const onAttractionDescriptionChange = (description: string) => {
        setAttractionData({...attractionData, description: description});
    }

    const onAttractionTicketPriceChange = (field: string, value: string) => {
        const ticketPrices = attractionData.ticket_prices;
        ticketPrices[field] = value;
        setAttractionData({...attractionData, ticket_prices: ticketPrices});
    }

    const onOpeningHoursChange = (field: string, value: string) => {
        const openingHours = attractionData.opening_hours;
        openingHours[field] = value;
        setAttractionData({...attractionData, opening_hours: openingHours});
    }

    const onIsAccessibleChange = () => {
        setAttractionData({...attractionData, is_accessible_for_disabled: !attractionData.is_accessible_for_disabled});
    }

    const checkIfTicketPricesValid = () => {
        return(attractionData.ticket_prices.currency && attractionData.ticket_prices.regular &&
            attractionData.ticket_prices.student && attractionData.ticket_prices.reduced &&
            attractionData.ticket_prices.group);
    }

    const checkIfOpeningHoursValid = () => {
        return(attractionData.opening_hours.monday, attractionData.opening_hours.tuesday,
            attractionData.opening_hours.wednesday, attractionData.opening_hours.thursday,
            attractionData.opening_hours.friday, attractionData.opening_hours.saturday, attractionData.opening_hours.sunday);
    }

    const checkIfValid = () => {
        return (route.params?.pickedLat && route.params?.pickedLon && checkIfTicketPricesValid()
            && checkIfOpeningHoursValid() && attractionData.city &&
            attractionData.name && attractionData.description);
    }

    const onSubmit = () => {
        if (!checkIfValid()) {
            setErrorMsg("Fill all fields!");
            return;
        }
        setErrorMsg("");
        attractionData.coords = {lat: route.params.pickedLat, lon: route.params.pickedLon};
        attractionData.opening_hours = {...attractionData.opening_hours};
        attractionData.ticket_prices = {...attractionData.ticket_prices};
        createAttraction(attractionData);
        attrCtx.fetchMore();
        navigation.goBack();
    }

    return (
        <SafeAreaView style={addAttractionPageStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={addAttractionPageStyles.titleContainer}>
                    <Text style={addAttractionPageStyles.title}>Add new attraction</Text>
                </View>
                <View style={addAttractionPageStyles.titleContainer}>
                    <Text style={addAttractionPageStyles.subtitle}>Select image of an attraction</Text>
                </View>
                <ImagePicker onSelectImage={onAttractionImageChange} buttonText={"Select photo"} />
                <InputField
                    title={"What's the attraction name?"}
                    onChangeText={onAttractionNameChange}
                    value={attractionData.name}
                    maxLength={100}
                    keyboardType={"default"}
                />
                <InputField
                    title={"In which city is it located?"}
                    onChangeText={onCityNameChange}
                    value={attractionData.city}
                    maxLength={50}
                    keyboardType={"default"}
                />
                <InputField
                    title={"Add description"}
                    onChangeText={onAttractionDescriptionChange}
                    value={attractionData.description}
                    maxLength={500}
                    keyboardType={"default"}
                />
                <IsAccessibleSwitch
                    onSwitch={onIsAccessibleChange}
                    title={"Is it accessible for people with disabilities?"}
                    value={attractionData.is_accessible_for_disabled}
                />
                <View style={addAttractionPageStyles.titleContainer}>
                    <Text style={addAttractionPageStyles.subtitle}>Enter ticket prices</Text>
                    <AttractionTicketTypesInput onPriceChange={onAttractionTicketPriceChange} />
                </View>
                <View style={addAttractionPageStyles.titleContainer}>
                    <Text style={addAttractionPageStyles.subtitle}>Enter opening hours</Text>
                    <AttractionOpeningHoursInput  onOpeningHoursChange={onOpeningHoursChange}/>
                </View>
                <View style={addAttractionPageStyles.titleContainer}>
                    <Text style={addAttractionPageStyles.subtitle}>Pick location</Text>
                    <View style={addAttractionPageStyles.mapContainer}>
                        <InvitationLocationPicker navigateTo={"AddAttractionPage"} />
                    </View>
                </View>
                <View style={addAttractionPageStyles.buttonContainer}>
                    {errorMsg && <Text style={addAttractionPageStyles.errorText}>{errorMsg}</Text>}
                    <ProfileButton icon={"paper-plane"} color={"orange"} onPress={onSubmit} text={"Submit"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AddAttractionPage;