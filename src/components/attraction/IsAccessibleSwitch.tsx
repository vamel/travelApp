import {View, Text, Switch} from "react-native";
import {isAccessibleSwitchStyles} from "../../styles/components/attraction/isAccessibleSwitchStyles";
import COLORS from "../../styles/utils/Colors";

interface IIsAccessibleSwitchProps {
    title: string;
    onSwitch: () => void;
    value: boolean;
}

const IsAccessibleSwitch = (props: IIsAccessibleSwitchProps) => {
    return(
        <View style={isAccessibleSwitchStyles.container}>
            <Text style={isAccessibleSwitchStyles.title}>{props.title}</Text>
            <Switch
                trackColor={{false: COLORS.universal.gray500, true: COLORS.attraction.orange800}}
                thumbColor={props.value ? COLORS.attraction.orange100 : '#f4f3f4'}
                onValueChange={props.onSwitch}
                value={props.value}
            />
        </View>
    );
}

export default IsAccessibleSwitch;