import {View, Image, Pressable, Text} from "react-native";
import {invitationItemStyles} from "../../styles/components/invitation/invitationItemStyles";
import {useState} from "react";
import {InvitationStatus} from "../../models/enums/InvitationStatus";
import COLORS from "../../styles/utils/Colors";
import {InvitationDTO} from "../../models/classes/InvitationDTO";

interface IInvitationSentItemProps {
    invitation: InvitationDTO
}

const InvitationSentItem = (props: IInvitationSentItemProps) => {
    const [inviteeProfileUrl, setInviteeProfileUrl] = useState("");

    const generateStatusText = () => {
        const status = props.invitation.status;
        const textStyle = status === InvitationStatus.PENDING ? {color: COLORS.invitation.pending} :
            status === InvitationStatus.ACCEPTED ? {color: COLORS.invitation.accepted} : {color: COLORS.invitation.rejected};
        return <Text style={[invitationItemStyles.detailsText, textStyle]}>Status: {props.invitation.status}</Text>
    }

    return(
        <View style={invitationItemStyles.container}>
            <Pressable
                onPress={() => {}}
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
