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
import {Country} from "../models/enums/Country";

const CreateProfilePage = ({navigation, route}) => {
    const [userName, setUserName] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userBirthdate, setUserBirthdate] = useState(new Date());
    const [userFavouriteCity, setUserFavouriteCity] = useState("");
    const [userPlaceOfOrigin, setUserPlaceOfOrigin] = useState("");
    const [userInstagram, setUserInstagram] = useState("");
    const [userHobbies, setUserHobbies] = useState([]);
    const [userLanguages, setUserLanguages] = useState([]);
    const [userCountries, setUserCountries] = useState([]);
    const [userBio, setUserBio] = useState("");
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const onUserNameChange = (userNameText: string) => {
        setUserName(userNameText);
    }

    const onUserFirstNameChange = (firstNameText: string) => {
        setUserFirstName(firstNameText);
    }

    const onUserOriginChange = (placeOfOriginText: string) => {
        setUserPlaceOfOrigin(placeOfOriginText);
    }

    const onUserFavouriteCityChange = (favouriteCityText: string) => {
        setUserFavouriteCity(favouriteCityText);
    }

    const onUserInstagramChange = (instagram: string) => {
        setUserInstagram(instagram);
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

    const onCountryChoice = (countryChosen) => {
        if (userCountries.includes(countryChosen)) {
            setUserCountries((prevCountries) => prevCountries.filter((country) => country !== countryChosen));
        } else {
            setUserCountries((prevCountries) => [...prevCountries, countryChosen]);
        }
    }

    const onBioChange = (bioText: string) => {
        setUserBio(bioText);
    }

    const onSubmit = () => {
        const createdUser = new User(
            route.params.uid, userName, userBio, userPlaceOfOrigin ,
            userFirstName, userFavouriteCity, [], route.params.email,
            userBirthdate.toDateString(), userInstagram, userHobbies, userLanguages, userCountries, "");
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
                <CreateProfileInput
                    title={"Where are you from?"}
                    onChangeText={onUserOriginChange}
                    placeholder={"Place of origin"}
                    maxLength={30}
                    keyboardType={"default"}
                />
                <CreateProfileInput
                    title={"Which city is your favourite?"}
                    onChangeText={onUserFavouriteCityChange}
                    placeholder={"City's name"}
                    maxLength={30}
                    keyboardType={"default"}
                />
                <CreateProfileInput
                    title={"Do you have instagram?"}
                    onChangeText={onUserInstagramChange}
                    placeholder={"Username on instagram"}
                    maxLength={30}
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
                        items={Object.values(Hobby).sort()}
                        onChoice={onHobbyChoice}
                    />
                    <RegisterItemList
                        title={"Choose your spoken languages"}
                        items={Object.values(Language).sort()}
                        onChoice={onLanguageChoice}
                    />
                    <RegisterItemList
                        title={"Where have you been already?"}
                        items={Object.values(Country).sort()}
                        onChoice={onCountryChoice}
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
