import {Text, View} from "react-native";
import {registerItemListStyles} from "../../styles/components/register/registerItemListStyles";
import RegisterItemTile from "./RegisterItemTile";

interface IRegisterItemListProps {
    items: string[],
    title: string,
    onChoice: (string) => void
}

const RegisterItemList = (props: IRegisterItemListProps) => {
    return(
        <View style={registerItemListStyles.listContainer}>
            <Text style={registerItemListStyles.title}>{props.title}</Text>
            <View style={registerItemListStyles.list}>
                {props.items.map((item) => {
                    return <RegisterItemTile itemText={item} onPress={props.onChoice} key={item} />
                })}
            </View>
        </View>
    );
}

export default RegisterItemList;
