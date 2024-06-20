import { useEffect, useState } from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref } from "firebase/storage";
import { Attraction } from "../../models/interfaces/Attraction";
import { AttractionField } from "../../models/enums/attractionField";

const fieldValues = Object.values(AttractionField);

interface PageGridProps {
  imageUrl: string;
  details: Attraction;
}

const PageGrid = (props: PageGridProps) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function getImage() {
        const gsReference = ref(storage, props.imageUrl);
        await getDownloadURL(gsReference).then(result => setImageUrl(() => result));
    }
    getImage();
}, []);

    return (
      <View style={PageGridStyles.main}>
        <View style={PageGridStyles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={PageGridStyles.image}/>
        </View>
        <ScrollView style={PageGridStyles.scrollView}>
          {
            fieldValues.map(field => {
              return <View style={PageGridStyles.grid}>
                <View style={PageGridStyles.labelTextView}>
                  <Text style={PageGridStyles.labelText}>{`${field}: `}</Text>
                </View>
                <View style={PageGridStyles.valueTextView}>
                  <Text style={PageGridStyles.valueText}>{props.details[field]}</Text>
                </View>
              </View>
            })
          }
        </ScrollView>
      </View>
    );
}

const PageGridStyles = StyleSheet.create(
  {
    main: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
    imageContainer: {
        alignItems: 'stretch'
    },
    image: {
      height: 245,
      borderRadius: 5,
      overflow: 'hidden',
    },
    scrollView: {
      margin: 10
    },
    grid: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelTextView: {
      flex: 2,
    },
    valueTextView: {
      flex: 4,
    },
    labelText: {
      textTransform: 'capitalize',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    valueText: {
      textAlign: 'center',
    }
  }
)

export default PageGrid;