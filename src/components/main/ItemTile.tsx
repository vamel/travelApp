import {View, Text} from "react-native";
import {itemTileStyles} from "../../styles/components/ItemTileStyles";

interface IItemTileProps {
    itemText: string
}

const ItemTile = (props: IItemTileProps) => {
    return(
        <View style={itemTileStyles.container} >
            <Text style={itemTileStyles.text} >
                {props.itemText}
            </Text>
        </View>
    );
}

export default ItemTile;
