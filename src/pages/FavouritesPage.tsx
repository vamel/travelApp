import {Text, View} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../store/user/auth-context";
import ProfileButton from "../components/userprofile/ProfileButton";
import {useNavigation} from "@react-navigation/native";

const FavouritesPage = () => {
    const authCtx = useContext(AuthContext);
    const navigation = useNavigation()

;    const handleGoBackButton = () => {
        navigation.goBack();
    }

    return(
        <View>
            <Text>Favourite attractions.</Text>
            <ProfileButton
                icon={"return-up-back"}
                color={"red"}
                onPress={handleGoBackButton}
                text={"Go back"}
            />
        </View>
    );
}

export default FavouritesPage;
