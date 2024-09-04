import {View, Text} from "react-native";
import UserInfoField from "./UserInfoField";
import {userInfoStyles} from "../../styles/components/userprofile/userInfoStyles";
import UserItemList from "./UserItemList";
import {User} from "../../models/classes/User";
import {calculateAge} from "../../utils/dateUtils";

interface IUserInfoProps {
    userInfo: User
}

const UserInfo = (props: IUserInfoProps) => {
    return(
        <View style={userInfoStyles.userDetailsContainer}>
            <Text style={userInfoStyles.userBio}>{props.userInfo.bio}</Text>
            {/*{fields.map((field) => {*/}
            {/*    return (<UserInfoField text={field} value={"value"} key={field} />);*/}
            {/*})}*/}
            <UserInfoField text={"Name"} value={props.userInfo.firstname} />
            <UserInfoField text={"From"} value={"Place"} />
            <UserInfoField text={"Age"} value={`${calculateAge(props.userInfo.birthdate)}`} />
            <UserInfoField text={"Favourite city"} value={"Auckland"} />
            <UserInfoField text={"Facebook"} value={""} />
            <UserInfoField text={"Instagram"} value={"@empty_profile"} />
            <UserInfoField text={"X"} value={"@bringBackTwitter"} />
            <UserItemList title={"Interests"} items={props.userInfo.hobbies} />
            <UserItemList title={"Languages spoken"} items={props.userInfo.languages} />
            <UserItemList title={"Visited countries"} items={["England", "Germany", "France"]} />
        </View>
    );
}

export default UserInfo;
