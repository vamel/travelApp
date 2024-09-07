import {useContext, useState} from "react";
import {User} from "../models/classes/User";
import {putUser} from "../firebase/createUser";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {createProfilePageStyles} from "../styles/pages/createProfilePageStyles";
import ProfilePictureImagePicker from "../components/register/ProfilePictureImagePicker";
import RegisterDatePicker from "../components/register/RegisterDatePicker";
import {Hobby} from "../models/enums/Hobby";
import {Language} from "../models/enums/Language";
import {Country} from "../models/enums/Country";
import UserBioInput from "../components/register/UserBioInput";
import RegisterButton from "../components/register/RegisterButton";
import {AuthContext} from "../store/user/auth-context";
import EditProfileInput from "../components/editprofile/EditProfileInput";
import EditProfileItemList from "../components/editprofile/EditProfileItemList";
import EditProfileBio from "../components/editprofile/EditProfileBio";

const EditProfilePage = ({navigation}) => {
    const authCtx = useContext(AuthContext);

    const [userBirthdate, setUserBirthdate] = useState(new Date(authCtx.user.birthdate));
    const [userData, setUserData] = useState<User>(authCtx.user);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

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

    const onSubmit = () => {
        const createdUser: User = {
            ...userData,
            uid: authCtx.uid,
            instagram: ""} as User;
        putUser(createdUser).then(() => authCtx.getData(authCtx.uid)).then(() => navigation.navigate("UserPage"));
    }

    return(
        <SafeAreaView style={createProfilePageStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={createProfilePageStyles.titleContainer}>
                    <Text style={createProfilePageStyles.title}>Edit your profile</Text>
                </View>
                <ProfilePictureImagePicker onSelectImage={userProfilePictureChange} />
                <EditProfileInput
                    title={"What's your first name?"}
                    onChangeText={onUserFirstNameChange}
                    value={userData.firstname}
                    maxLength={20}
                    keyboardType={"default"}
                />
                <EditProfileInput
                    title={"Where are you from?"}
                    onChangeText={onUserOriginChange}
                    value={userData.place_of_origin}
                    maxLength={30}
                    keyboardType={"default"}
                />
                <EditProfileInput
                    title={"Which city is your favourite?"}
                    onChangeText={onUserFavouriteCityChange}
                    value={userData.favourite_city}
                    maxLength={30}
                    keyboardType={"default"}
                />
                {/*<EditProfileInput*/}
                {/*    title={"Do you have instagram?"}*/}
                {/*    onChangeText={onUserInstagramChange}*/}
                {/*    value={userData.instagram}*/}
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
                    <EditProfileItemList
                        title={"What are your hobbies?"}
                        items={Object.values(Hobby).sort()}
                        value={userData.hobbies}
                        onChoice={onHobbyChoice}
                    />
                    <EditProfileItemList
                        title={"Choose your spoken languages"}
                        items={Object.values(Language).sort()}
                        value={userData.languages}
                        onChoice={onLanguageChoice}
                    />
                    <EditProfileItemList
                        title={"Where have you been already?"}
                        items={Object.values(Country).sort()}
                        value={userData.countries}
                        onChoice={onCountryChoice}
                    />
                </View>
                <EditProfileBio onChangeText={onBioChange} value={userData.bio}/>
                <View style={createProfilePageStyles.buttonContainer}>
                    <RegisterButton title={"Finish"} onPress={onSubmit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default EditProfilePage;
