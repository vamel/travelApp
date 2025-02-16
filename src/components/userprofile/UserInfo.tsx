import {View, Text} from "react-native";
import UserInfoField from "./UserInfoField";
import {userInfoStyles} from "../../styles/components/userprofile/userInfoStyles";
import UserItemList from "./UserItemList";
import {User} from "../../models/classes/User";
import {calculateAge} from "../../utils/dateUtils";
import {toTitle} from "../../utils/stringUtils";

interface IUserInfoProps {
    userInfo: User,
    location: string;
}

const UserInfo = (props: IUserInfoProps) => {
    return(
        <View style={userInfoStyles.userDetailsContainer}>
            <Text style={userInfoStyles.userBio}>{props.userInfo.bio}</Text>
            <UserInfoField text={"Name"} value={props.userInfo.firstname} />
            <UserInfoField text={"From"} value={props.userInfo.place_of_origin} />
            <UserInfoField text={"Age"} value={`${isNaN(calculateAge(props.userInfo.birthdate)) ? "" : calculateAge(props.userInfo.birthdate).toString()}`} />
            <UserInfoField text={"Favourite city"} value={props.userInfo.favourite_city} />
            <UserInfoField text={"Last seen in"} value={toTitle(props.location)} />
            <UserInfoField text={"Facebook"} value={""} />
            <UserInfoField text={"Instagram"} value={""} />
            <UserInfoField text={"X"} value={""} />
            <UserItemList title={"Interests"} items={props.userInfo.hobbies} />
            <UserItemList title={"Languages spoken"} items={props.userInfo.languages} />
            <UserItemList title={"Visited countries"} items={props.userInfo.countries} />
        </View>
    );
}

export default UserInfo;
