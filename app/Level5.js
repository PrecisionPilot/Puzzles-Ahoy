import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, StyleSheet, View, Alert, BackHandler} from 'react-native';

export default function Level5( {nextLevel} ) {
  const [status, setStatus] = useState("")
  useEffect(() => {
    if (status === "") {
      setTimeout(() => {
        Alert.alert("Fatal Error", "Application has suddenly stopped working", [
          {text: "Recover", onPress: () => setStatus("Recovering ...") },
        ])
      }, 1000)
    }
    else if (status === "Recovering ...") {
      setTimeout(() => {
        Alert.alert("Recovery", "To initiate the recovery process, I'm going to need to ask you a question.", [
          {text: "Ok", onPress: () => setStatus("Overthinking ...")},
        ])
      }, 1000)
    }
    else if (status === "Overthinking ...") {
      setTimeout(() => {
        Alert.alert("Recovering", "You see, after being pen-pals for a while, let's put a shrink to those miles and try something new for a smile ✨", [
          {text: "Mhm", onPress: () => setStatus("Superthinking ...")},
        ])
      }, 2000)
    }
    else if (status === "Superthinking ...") {
      setTimeout(() => {
        Alert.alert("Coping", "Will you go out to prom with me?", [
          {text: "No", onPress: no},
          {text: "Yes", onPress: yes},
        ])
      }, 4000)
    }
  }, [status])
  
  const yes = () => {
    // Confetti
    Alert.alert("Success!", "Software has successfully recovered! 🎉", [
      {text: "Ok"}
    ])
  }
  const no = () => {
    // Sadness
    setTimeout(() => {BackHandler.exitApp()}, 1000)
    Alert.alert("Oh no!", "Software has failed to recover. \nPlease try again", [
      {text: "Ok"}
    ])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{status}</Text>
        <ActivityIndicator size="large" color="orange" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  text: {
    color: "orange",
    fontSize: 40,
  }
})