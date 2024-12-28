import {Pressable, Text} from "react-native";
import {toTitle} from "../../utils/stringUtils";
import {useState} from "react";
import {registerItemTileStyles} from "../../styles/components/register/registerItemTileStyles";
import {getColorValue} from "../../utils/colorUtils";

interface IEditProfileItemTitleProps {
    itemText: string,
    selected: boolean;
    onPress: (string) => void
}

const EditProfileItemTitle = (props: IEditProfileItemTitleProps) => {
    const [isSelected, setIsSelected] = useState(props.selected);

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

export default EditProfileItemTitle;
