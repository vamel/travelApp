import {Text, View} from "react-native";
import {createInvitationPageStyles} from "../styles/pages/createInvitationPageStyles";
import {useContext, useState} from "react";
import InvitationDatePicker from "../components/invitations/InvitationDatePicker";
import InvitationMessageInput from "../components/invitations/InvitationMessageInput";
import {Invitation} from "../models/classes/Invitation";
import {AuthContext} from "../store/user/auth-context";
import ProfileButton from "../components/userprofile/ProfileButton";
import {Coords} from "../models/classes/Coords";
import {putInvitation} from "../firebase/createInvitation";
import {UserDTO} from "../models/classes/UserDTO";
import {InvitationStatus} from "../models/enums/InvitationStatus";
import InvitationLocationPicker from "../components/invitations/InvitationLocationPicker";

const CreateInvitationPage = ({route, navigation}) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [message, setMessage] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState("");
    const authCtx = useContext(AuthContext);

    const handleDateButtonClick = () => {
        setIsDatePickerOpen((prevState => !prevState));
    }

    const handleTimeButtonClick = () => {
        setIsTimePickerOpen((prevState => !prevState));
    }

    const onDateChange = (event, selectedDate) => {
        setIsDatePickerOpen(false);
        setSelectedDate(selectedDate);
    }

    const onTimeChange = (event, selectedTime) => {
        setIsTimePickerOpen(false);
        setSelectedDate(selectedTime);
    }

    const onMessageChange = (msg: string) => {
        setMessage(msg);
    }

    const checkIfValid = () => {
        return (route.params.pickedLat && route.params.pickedLon && message && selectedDate);

    }

    const onSubmit = () => {
        if (!checkIfValid()) {
            setErrorMsg("Fill all fields!");
            return;
        }
        const currentUser: UserDTO = authCtx.user!;
        const invitation = new Invitation(
            route.params.invitee, route.params.username, route.params.pictureUrl,
            authCtx.uid, currentUser.username, currentUser.profile_picture_url,
            new Coords(route.params.pickedLat, route.params.pickedLon),
            selectedDate, message, InvitationStatus.PENDING);
        putInvitation(invitation).then(navigation.goBack());
    }

    return(
        <View style={createInvitationPageStyles.container}>
            <Text style={createInvitationPageStyles.title}>Invite {route.params.username}</Text>
            <InvitationDatePicker
                onDateButtonPress={handleDateButtonClick}
                onTimeButtonPress={handleTimeButtonClick}
                isDatePickerOpen={isDatePickerOpen}
                isTimePickerOpen={isTimePickerOpen}
                invitationDate={selectedDate}
                onInvitationDateChange={onDateChange}
                onInvitationTimeChange={onTimeChange}
            />
            <InvitationMessageInput onChangeText={onMessageChange} />
            <InvitationLocationPicker />
            <ProfileButton icon={"paper-plane"} color={"orange"} onPress={onSubmit} text={"Send"} />
            {errorMsg && <Text style={createInvitationPageStyles.errorText}>{errorMsg}</Text>}
        </View>
    );
}

export default CreateInvitationPage;
