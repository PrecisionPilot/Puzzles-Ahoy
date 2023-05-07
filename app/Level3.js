import React, { useEffect } from 'react';
import { StyleSheet, View, Alert, Image, TextInput, Button } from 'react-native';

export default function Level3( {nextLevel} ) {
  const [input, setInput] = React.useState("")

  const handleSubmit = () => {
    // Check if the answer is correct
    // If it is, go to next level
    // If it isn't, do nothing
    if (input.toLowerCase() == "a") {
      Alert.alert("You win!", "Yeeeehawwwww", [{text: "Next Level", onPress: nextLevel}])
    }
  }

  return (
    <>
      <Image style={styles.image} source={require('./Assets/Math.png')} />
      <View style={styles.submission}>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} placeholder="Answer" onChangeText={setInput} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
    alignSelf: "center",
    position: "absolute",
    top: 50,
  },
  submission: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  }
})