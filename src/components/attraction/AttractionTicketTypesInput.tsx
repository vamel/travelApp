import {View, Text, TextInput} from "react-native";
import {attractionTicketTypesInputStyles} from "../../styles/components/attraction/attractionTicketTypesInputStyles";

interface IAttractionTicketTypesInputProps {
    onPriceChange: (string, string) => void
}

const AttractionTicketTypesInput = (props: IAttractionTicketTypesInputProps) => {

    const onCurrencyChange = (currency: string) => {
        props.onPriceChange("currency", currency);
    }

    const onRegularTicketPriceChange = (price: string) => {
        props.onPriceChange("regular", price);
    }

    const onReducedTicketPriceChange = (price: string) => {
        props.onPriceChange("reduced", price);
    }

    const onStudentTicketPriceChange = (price: string) => {
        props.onPriceChange("student", price);
    }

    const onGroupTicketPriceChange = (price: string) => {
        props.onPriceChange("group", price);
    }

    return(
        <View style={attractionTicketTypesInputStyles.container}>
            <View style={attractionTicketTypesInputStyles.subtitleContainer}>
                <Text style={attractionTicketTypesInputStyles.ticketTypeText}>Currency used</Text>
                <TextInput
                    maxLength={3}
                    keyboardType={"default"}
                    onChangeText={onCurrencyChange}
                    style={attractionTicketTypesInputStyles.priceInput}
                />
            </View>
            <View style={attractionTicketTypesInputStyles.subtitleContainer}>
                <Text style={attractionTicketTypesInputStyles.ticketTypeText}>Regular ticket</Text>
                <TextInput
                    maxLength={8}
                    keyboardType={"numeric"}
                    onChangeText={onRegularTicketPriceChange}
                    style={attractionTicketTypesInputStyles.priceInput}
                />
            </View>
            <View style={attractionTicketTypesInputStyles.subtitleContainer}>
                <Text style={attractionTicketTypesInputStyles.ticketTypeText}>Reduced ticket</Text>
                <TextInput
                    maxLength={8}
                    keyboardType={"numeric"}
                    onChangeText={onReducedTicketPriceChange}
                    style={attractionTicketTypesInputStyles.priceInput}
                />
            </View>
            <View style={attractionTicketTypesInputStyles.subtitleContainer}>
                <Text style={attractionTicketTypesInputStyles.ticketTypeText}>Student ticket</Text>
                <TextInput
                    maxLength={8}
                    keyboardType={"numeric"}
                    onChangeText={onStudentTicketPriceChange}
                    style={attractionTicketTypesInputStyles.priceInput}
                />
            </View>
            <View style={attractionTicketTypesInputStyles.subtitleContainer}>
                <Text style={attractionTicketTypesInputStyles.ticketTypeText}>Group ticket</Text>
                <TextInput
                    maxLength={8}
                    keyboardType={"numeric"}
                    onChangeText={onGroupTicketPriceChange}
                    style={attractionTicketTypesInputStyles.priceInput}
                />
            </View>
        </View>
    );
}

export default AttractionTicketTypesInput;