import {Text, TextInput, View} from "react-native";
import ProfileButton from "../userprofile/ProfileButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import {registerDatePickerStyles} from "../../styles/components/register/registerDatePickerStyles";
import {createProfileInputStyles} from "../../styles/components/register/createProfileInputStyles";
import {dateToString, getDateElements} from "../../utils/dateUtils";

interface IRegisterDatePickerProps {
    onButtonPress: () => void,
    isDatePickerOpen: boolean,
    userBirthdate: Date,
    onUserBirthdateChange: (event: any, selectedDate: any) => void
}

const RegisterDatePicker = (props: IRegisterDatePickerProps) => {
    return(
        <View style={registerDatePickerStyles.container}>
            <Text style={registerDatePickerStyles.birthdaySubtitle}>What's your birthdate?</Text>
            <View style={registerDatePickerStyles.birthdayContainer}>
                <ProfileButton
                    icon={"calendar"}
                    color={"orange"}
                    onPress={props.onButtonPress}
                    text={"Pick date"}
                />
                <TextInput
                    placeholder={props.userBirthdate.toLocaleDateString()}
                    editable={false}
                    style={registerDatePickerStyles.dateInput}
                />
            </View>
            {props.isDatePickerOpen && (<DateTimePicker
                value={props.userBirthdate}
                mode={"date"}
                onChange={props.onUserBirthdateChange}
                minimumDate={new Date(1900, 0, 1)}
                maximumDate={new Date()}
            />)}
        </View>
    );
}

export default RegisterDatePicker;
