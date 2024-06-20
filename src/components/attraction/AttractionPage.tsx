import {Attraction} from "../../models/interfaces/Attraction";
import {ScrollView, StyleSheet, View, Text} from "react-native";
import ImageSlider from "./ImageSlider";
import {useEffect, useState} from "react";

const AttractionPage = (props) => {
    const [attraction, setAttraction] = useState<Attraction>(new Attraction("", "", []));

    useEffect(() => {
        async function getAttraction() {
            const data: Attraction = new Attraction(props.data.name, props.data.description, props.data.images_url);
            await setAttraction(data);
        }
        getAttraction();
    }, []);

    return (
        <View style={attractionPageStyles.attractionPage}>
            <View style={attractionPageStyles.imageSliderContainer}>
                <Text>SLIDER</Text>
                <ImageSlider images={attraction.images_url}/>
            </View>
            <View style={attractionPageStyles.attractionDetailsContainer}>
                <ScrollView>
                    <View>
                        <Text style={attractionPageStyles.text}>NAME</Text>
                        <Text style={attractionPageStyles.text}>{attraction.name}</Text>
                    </View>
                    <View>
                        <Text style={attractionPageStyles.text}>DESCRIPTION</Text>
                        <Text style={attractionPageStyles.text}>{attraction.description}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const attractionPageStyles = StyleSheet.create(
    {
        attractionPage: {
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        },
        imageSliderContainer: {
            flex: 5
        },
        attractionDetailsContainer: {
            flex: 1
        },
        text: {

        }
    }
)

export default AttractionPage;
