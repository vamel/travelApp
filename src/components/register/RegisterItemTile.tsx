import {Pressable, Text} from "react-native";
import {toTitle} from "../../utils/stringUtils";
import {useState} from "react";
import {registerItemTileStyles} from "../../styles/components/register/registerItemTileStyles";
import {getColorValue} from "../../utils/colorUtils";

interface IRegisterItemTileProps {
    itemText: string,
    onPress: (string) => void
}

const RegisterItemTile = (props: IRegisterItemTileProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleOnPress = (item) => {
        setIsSelected(!isSelected);
        props.onPress(item);
    }

    return(
        <Pressable
            onPress={() => handleOnPress(props.itemText)}
            style={[registerItemTileStyles.container,
                {backgroundColor: getColorValue(isSelected ? "green" : "orange")}]} >
            <Text style={registerItemTileStyles.text} >
                {toTitle(props.itemText)}
            </Text>
        </Pressable>
    );
}

export default RegisterItemTile;
