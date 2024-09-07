import {Text, View} from "react-native";
import {registerItemListStyles} from "../../styles/components/register/registerItemListStyles";
import EditProfileItemTitle from "./EditProfileItemTitle";

interface IEditProfileItemListProps {
    items: string[],
    title: string,
    value: string[],
    onChoice: (string) => void
}

const EditProfileItemList = (props: IEditProfileItemListProps) => {
    return(
        <View style={registerItemListStyles.listContainer}>
            <Text style={registerItemListStyles.title}>{props.title}</Text>
            <View style={registerItemListStyles.list}>
                {props.items.map((item) => {
                    return(
                        <EditProfileItemTitle
                            itemText={item}
                            onPress={props.onChoice}
                            key={item}
                            selected={props.value.includes(item)}
                        />
                    );
                })}
            </View>
        </View>
    );
}

export default EditProfileItemList;
