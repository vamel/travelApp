import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Image, View } from 'react-native';
import AttractionList from './src/components/main/AttractionList';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden={true}/>
      <AttractionList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
