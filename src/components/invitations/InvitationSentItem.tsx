import {View, Image, Pressable, Text} from "react-native";
import {invitationItemStyles} from "../../styles/components/invitation/invitationItemStyles";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../firebase/config";
import {InvitationStatus} from "../../models/enums/InvitationStatus";
import COLORS from "../../styles/utils/Colors";
import {InvitationDTO} from "../../models/classes/InvitationDTO";

interface IInvitationSentItemProps {
    invitation: InvitationDTO
}

const InvitationSentItem = (props: IInvitationSentItemProps) => {
    const [inviteeProfileUrl, setInviteeProfileUrl] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const getImage = async () => {
            const gsReference = ref(storage, props.invitation.inviteePictureUrl);
            await getDownloadURL(gsReference).then(result => setInviteeProfileUrl(() => result));
        }
        if (props.invitation.inviteePictureUrl)
        {
            getImage();
        }
    }, [props.invitation.status]);

    const handleInvitationPress = () => {
        //@ts-ignore
        navigation.navigate("InvitationPage", {
            invitation: props.invitation
        });
    }

    const generateStatusText = () => {
        const status = props.invitation.status;
        const textStyle = status === InvitationStatus.PENDING ? {color: COLORS.invitation.pending} :
            status === InvitationStatus.ACCEPTED ? {color: COLORS.invitation.accepted} : {color: COLORS.invitation.rejected};
        return <Text style={[invitationItemStyles.detailsText, textStyle]}>Status: {props.invitation.status}</Text>
    }

    return(
        <View style={invitationItemStyles.container}>
            <Pressable
                onPress={handleInvitationPress}
                android_ripple={invitationItemStyles.rippleAndroid}
                style={({pressed}) => pressed ? invitationItemStyles.cardPressed : null}
            >
                <View style={invitationItemStyles.invitation}>
                    <Image
                        source={inviteeProfileUrl ? {uri: inviteeProfileUrl} : require("../../assets/images/user-placeholder.png")}
                        style={invitationItemStyles.userProfilePic}
                    />
                    <View style={invitationItemStyles.detailsContainer}>
                        <Text style={invitationItemStyles.detailsText}>You invited {props.invitation.inviteeName}</Text>
                        {generateStatusText()}
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default InvitationSentItem;
