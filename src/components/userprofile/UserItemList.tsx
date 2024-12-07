import {View, Text} from "react-native";
import ItemTile from "../icons/ItemTile";
import {userItemListStyles} from "../../styles/components/userprofile/userItemListStyles";

interface IUserItemListProps {
    items: string[],
    title: string
}

const UserItemList = (props: IUserItemListProps) => {
    if (!props.items) {
        return null;
    }

    return(
        <View style={userItemListStyles.languageContainer}>
            <Text style={userItemListStyles.title}>{props.title}</Text>
            <View style={userItemListStyles.languageList}>
                {props.items.map((item) => {
                    return <ItemTile itemText={item} key={item} />
                })}
            </View>
        </View>
    );
}

export default UserItemList;
