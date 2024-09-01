import {View, Image, Pressable, Text} from "react-native";
import {invitationItemStyles} from "../../styles/components/invitation/invitationItemStyles";
import {useNavigation} from "@react-navigation/native";

interface IInvitationItemProps {
    name: string,
    location: string
}

const InvitationItem = (props: IInvitationItemProps) => {
    const navigation = useNavigation();

    const handleInvitationPress = () => {
        //@ts-ignore
        navigation.navigate("InvitationPage");
    }

    return(
        <View style={invitationItemStyles.container}>
            <Pressable
                onPress={handleInvitationPress}
                android_ripple={invitationItemStyles.rippleAndroid}
                style={({pressed}) => pressed ? invitationItemStyles.cardPressed : null}
            >
                <View style={invitationItemStyles.invitation}>
                    <Image source={require("../../assets/images/user-placeholder.png")} style={invitationItemStyles.userProfilePic} />
                    <View style={invitationItemStyles.detailsContainer}>
                        <Text style={invitationItemStyles.detailsText}>{props.name} invites you to:</Text>
                        <Text style={invitationItemStyles.locationText}>{props.location}</Text>
                        {/*<View style={invitationItemStyles.actionsContainer}>* <----- akcje na stronie poszczególnego zaproszenia/}
                        {/*    <View style={invitationItemStyles.accept} />*/}
                        {/*    <View style={invitationItemStyles.reject} />*/}
                        {/*</View>*/}
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default InvitationItem;
