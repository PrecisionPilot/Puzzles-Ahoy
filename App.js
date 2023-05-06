import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableWithoutFeedback, Alert, SafeAreaView } from 'react-native';

export default function App() {
  console.log("Hello world")

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Hit on me" onPress={() => { Alert.alert("Alert!", "If I'm left single again, will (can) you go to prom with me this june?", [
        { text: "Yes"},
        { text: "No"}
      ]) }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 1280,
    height: 720,
  }
});
