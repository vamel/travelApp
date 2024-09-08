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
import ProfilePictureImagePicker from "../components/register/ProfilePictureImagePicker";

interface IRegisterData {
    bio: string;
    birthdate: string;
    countries: string[];
    email: string;
    favourite_city: string;
    firstname: string;
    hobbies: string[];
    languages: string[];
    place_of_origin: string;
    profile_picture_url: string;
    username: string;
}

const emptyUser: IRegisterData = {
    bio: "",
    birthdate: "",
    countries: [],
    email: "",
    favourite_city: "",
    firstname: "",
    hobbies: [],
    languages: [],
    place_of_origin: "",
    profile_picture_url: "",
    username: ""
}

const CreateProfilePage = ({navigation, route}) => {
    const [userBirthdate, setUserBirthdate] = useState(new Date());
    const [userData, setUserData] = useState<IRegisterData>(emptyUser);
    const [usernameError, setUsernameError] = useState("");
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const onUserNameChange = (userNameText: string) => {
        setUserData({...userData, username: userNameText});
    }

    const userProfilePictureChange = (pictureUri: string) => {
        setUserData({...userData, profile_picture_url: pictureUri});
    }

    const onUserFirstNameChange = (firstNameText: string) => {
        setUserData({...userData, firstname: firstNameText});
    }

    const onUserOriginChange = (placeOfOriginText: string) => {
        setUserData({...userData, place_of_origin: placeOfOriginText});
    }

    const onUserFavouriteCityChange = (favouriteCityText: string) => {
        setUserData({...userData, favourite_city: favouriteCityText});
    }

    // const onUserInstagramChange = (instagram: string) => {
    //     setUserInstagram(instagram);
    // }

    const handleButtonClick = () => {
        setIsDatePickerOpen((prevState => !prevState));
    }

    const onUserBirthdateChange = (event, selectedDate) => {
        setIsDatePickerOpen(false);
        setUserBirthdate(selectedDate);
        setUserData({...userData, birthdate: selectedDate.toDateString()});
    }

    const onHobbyChoice = (hobbyChosen) => {
        if (userData.hobbies.includes(hobbyChosen)) {
            setUserData({...userData, hobbies: [...userData.hobbies.filter((hobby) => hobby !== hobbyChosen)]});
        } else {
            setUserData({...userData, hobbies: [...userData.hobbies, hobbyChosen]});
        }
    }

    const onLanguageChoice = (languageChosen) => {
        if (userData.languages.includes(languageChosen)) {
            setUserData({...userData, languages: [...userData.languages.filter((language) => language !== languageChosen)]});
        } else {
            setUserData({...userData, languages: [...userData.languages, languageChosen]});
        }
    }

    const onCountryChoice = (countryChosen) => {
        if (userData.countries.includes(countryChosen)) {
            setUserData({...userData, countries: [...userData.countries.filter((country) => country !== countryChosen)]});
        } else {
            setUserData({...userData, countries: [...userData.countries, countryChosen]});
        }
    }

    const onBioChange = (bioText: string) => {
        setUserData({...userData, bio: bioText});
    }

    const onSubmit = async () => {
        if (userData.username.length < 5) {
            setUsernameError("Username should be minimum 5 characters long");
        }
        const createdUser: User = {
            uid: route.params.uid,
            email: route.params.email,
            instagram: "",
            favourites: [],
            last_location: "",
            ...userData} as User;
        const response = await putUser(createdUser);
        if (!response) {
            navigation.navigate("CompleteRegistrationPage");
        }
        setUsernameError("User with given name already exists");
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
                    errorMsg={usernameError}
                />
                <ProfilePictureImagePicker onSelectImage={userProfilePictureChange} />
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
                {/*<CreateProfileInput*/}
                {/*    title={"Do you have instagram?"}*/}
                {/*    onChangeText={onUserInstagramChange}*/}
                {/*    placeholder={"Username on instagram"}*/}
                {/*    maxLength={30}*/}
                {/*    keyboardType={"default"}*/}
                {/*/>*/}
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
