import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {createProfilePageStyles} from "../styles/pages/createProfilePageStyles";
import {Hobby} from "../models/enums/Hobby";
import RegisterItemList from "../components/register/RegisterItemList";
import {Language} from "../models/enums/Language";
import {useState} from "react";
import UserBioInput from "../components/register/UserBioInput";
import CreateProfileInput from "../components/register/CreateProfileInput";
import RegisterButton from "../components/register/RegisterButton";
import RegisterDatePicker from "../components/register/RegisterDatePicker";
import {User} from "../models/classes/User";
import {putUser} from "../firebase/createUser";

const CreateProfilePage = ({navigation, route}) => {
    const [userName, setUserName] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userBirthdate, setUserBirthdate] = useState("");
    const [userHobbies, setUserHobbies] = useState([]);
    const [userLanguages, setUserLanguages] = useState([]);
    const [userBio, setUserBio] = useState("");
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const onUserNameChange = (userNameText: string) => {
        setUserName(userNameText);
    }

    const onUserFirstNameChange = (firstNameText: string) => {
        setUserFirstName(firstNameText);
    }

    const handleButtonClick = () => {
        setIsDatePickerOpen((prevState => !prevState));
    }

    const onUserBirthdateChange = (event, selectedDate) => {
        setIsDatePickerOpen(false);
        setUserBirthdate(selectedDate);
    }

    const onHobbyChoice = (hobbyChosen) => {
        if (userHobbies.includes(hobbyChosen)) {
            setUserHobbies((prevHobbies) => prevHobbies.filter((hobby) => hobby !== hobbyChosen));
        } else {
            setUserHobbies((prevHobbies) => [...prevHobbies, hobbyChosen]);
        }
    }

    const onLanguageChoice = (languageChosen) => {
        if (userLanguages.includes(languageChosen)) {
            setUserLanguages((prevLanguages) => prevLanguages.filter((language) => language !== languageChosen));
        } else {
            setUserLanguages((prevLanguages) => [...prevLanguages, languageChosen]);
        }
    }

    const onBioChange = (bioText: string) => {
        setUserBio(bioText);
    }

    const onSubmit = () => {
        const createdUser = new User(route.params.uid, userName, userBio, "" ,userFirstName, "", route.params.email,
            userBirthdate, userHobbies, userLanguages, []);
        putUser(createdUser);
        navigation.navigate("CompleteRegistrationPage");
    }

    return(
        <SafeAreaView style={createProfilePageStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={createProfilePageStyles.titleContainer}>
                    <Text style={createProfilePageStyles.title}>Set up your account</Text>
                    <Text style={createProfilePageStyles.subtitle}>Tell us about yourself</Text>
                </View>
                <CreateProfileInput
                    title={"Choose your username"}
                    onChangeText={onUserNameChange}
                    placeholder={"Username"}
                    maxLength={20}
                    keyboardType={"default"}
                />
                <CreateProfileInput
                    title={"What's your first name?"}
                    onChangeText={onUserFirstNameChange}
                    placeholder={"Name"}
                    maxLength={20}
                    keyboardType={"default"}
                />
                <RegisterDatePicker
                    isDatePickerOpen={isDatePickerOpen}
                    onUserBirthdateChange={onUserBirthdateChange}
                    onButtonPress={handleButtonClick}
                    userBirthdate={userBirthdate}
                />
                <View>
                    <RegisterItemList
                        title={"What are your hobbies?"}
                        items={Object.values(Hobby)}
                        onChoice={onHobbyChoice}
                    />
                    <RegisterItemList
                        title={"Choose your spoken languages"}
                        items={Object.values(Language)}
                        onChoice={onLanguageChoice}
                    />
                </View>
                <UserBioInput onChangeText={onBioChange}/>
                <View style={createProfilePageStyles.buttonContainer}>
                    <RegisterButton title={"Finish"} onPress={onSubmit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default CreateProfilePage;
