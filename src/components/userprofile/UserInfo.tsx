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
            <UserInfoField text={"Name"} value={props.userInfo.firstname} />
            <UserInfoField text={"From"} value={props.userInfo.country_of_origin} />
            <UserInfoField text={"Age"} value={`${calculateAge(props.userInfo.birthdate)}`} />
            <UserInfoField text={"Favourite city"} value={props.userInfo.favourite_city} />
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
