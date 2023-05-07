import { useDeviceOrientation } from '@react-native-community/hooks';
import { StyleSheet, Dimensions, Platform, Text, View, Image, StatusBar, Button, TouchableWithoutFeedback, Alert, SafeAreaView } from 'react-native';


export default function App() {
  console.log(Dimensions.get("screen"))
  console.log(Dimensions.get("window"))

  // render() {
  //   let color = "cadetblue"
  //   return()
  // }

  const handlePress = () => { 
    Alert.alert("Alert!", "If I'm left single again, will (can) you go to prom with me this june?", [
    { text: "Yes", onPress: handleYes },
    { text: "No", onPress: handleNo },
  ]) }

  const handleYes = () => {
    console.log("Yes")
  }
  const handleNo = () => {
    console.log("Naww")
    color = "cadetblue"
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Hit on me" onPress={handlePress} />
      <View style={{ backgroundColor: "aquamarine", width: "50%", height: "50%" }}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cadetblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: 1280,
    height: 720,
  }
});
