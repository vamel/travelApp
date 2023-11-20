import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AttractionList from './src/components/main/AttractionList';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <AttractionList />
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
