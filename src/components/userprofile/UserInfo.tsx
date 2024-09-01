import {View, Text} from "react-native";
import UserInfoField from "./UserInfoField";
import {userInfoStyles} from "../../styles/components/userprofile/userInfoStyles";
import UserItemList from "./UserItemList";

const UserInfo = () => {
    const fields = ["Name", "From", "Age", "Favourite city", "Facebook", "Instagram", "X"];

    return(
        <View style={userInfoStyles.userDetailsContainer}>
            <Text style={userInfoStyles.userBio}>Bio</Text>
            {fields.map((field) => {
                return (<UserInfoField text={field} value={"value"} key={field} />);
            })}
            <UserItemList items={["Shopping", "Museums", "Restaurants"]} title={"Interests"} />
            <UserItemList items={["english", "german", "french"]} title={"Languages spoken"} />
            <UserItemList items={["England", "Germany", "France"]} title={"Visited countries"} />
        </View>
    );
}

export default UserInfo;
