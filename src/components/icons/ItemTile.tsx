import {View, Text} from "react-native";
import {itemTileStyles} from "../../styles/components/icons/itemTileStyles";
import {toTitle} from "../../utils/stringUtils";

interface IItemTileProps {
    itemText: string,
}

const ItemTile = (props: IItemTileProps) => {
    return(
        <View
            style={itemTileStyles.container} >
            <Text style={itemTileStyles.text} >
                {toTitle(props.itemText)}
            </Text>
        </View>
    );
}

export default ItemTile;
