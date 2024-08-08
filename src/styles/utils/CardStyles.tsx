import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create(
    {
        container: {
            margin: 8,
            height: 250,
            borderColor: 'black',
            borderWidth: 3,
            borderRadius: 10,
        },
        coverText: {
            color: 'white',
            fontSize: 20,
            lineHeight: 42,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#00000090'
        },
        image: {
            width: 325,
            height: 245,
            borderRadius: 5,
            overflow: 'hidden',
            justifyContent: 'flex-end'
        }
    }
)

export default cardStyles;