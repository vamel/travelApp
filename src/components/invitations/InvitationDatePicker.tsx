import {Text, TextInput, View} from "react-native";
import ProfileButton from "../userprofile/ProfileButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import {invitationDatePickerStyles} from "../../styles/components/invitation/invitationDatePickerStyles";
import {dateToTime} from "../../utils/dateUtils";

interface IInvitationDatePickerProps {
    onDateButtonPress: () => void,
    onTimeButtonPress: () => void,
    isDatePickerOpen: boolean,
    isTimePickerOpen: boolean,
    invitationDate: Date,
    onInvitationDateChange: (event: any, selectedDate: any) => void
    onInvitationTimeChange: (event: any, selectedDate: any) => void
}

const InvitationDatePicker = (props: IInvitationDatePickerProps) => {
    return(
        <View style={invitationDatePickerStyles.container}>
            <Text style={invitationDatePickerStyles.dateInputSubtitle}>Select date</Text>
            <View style={invitationDatePickerStyles.dateInputContainer}>
                <ProfileButton
                    icon={"calendar"}
                    color={"orange"}
                    onPress={props.onDateButtonPress}
                    text={"Pick date"}
                />
                <TextInput
                    placeholder={props.invitationDate.toLocaleDateString()}
                    editable={false}
                    style={invitationDatePickerStyles.dateInput}
                />
            </View>
            {props.isDatePickerOpen && (<DateTimePicker
                value={props.invitationDate}
                mode={"date"}
                onChange={props.onInvitationDateChange}
                minimumDate={new Date()}
            />)}
            <Text style={invitationDatePickerStyles.dateInputSubtitle}>Select time</Text>
            <View style={invitationDatePickerStyles.dateInputContainer}>
                <ProfileButton
                    icon={"time"}
                    color={"orange"}
                    onPress={props.onTimeButtonPress}
                    text={"Pick time"}
                />
                <TextInput
                    placeholder={dateToTime(props.invitationDate.getHours(), props.invitationDate.getMinutes())}
                    editable={false}
                    style={invitationDatePickerStyles.dateInput}
                />
            </View>
            {props.isTimePickerOpen && (<DateTimePicker
                value={props.invitationDate}
                mode={"time"}
                is24Hour={true}
                onChange={props.onInvitationTimeChange}
            />)}
        </View>
    );
}

export default InvitationDatePicker;
