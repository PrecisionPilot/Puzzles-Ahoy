import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, StyleSheet, View, Alert, BackHandler, Vibration } from 'react-native';

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
        // You see, after being pen-pals for a while, let's put a shrink to those miles and try something new for a smile ✨
        Alert.alert("Recovering", "You see, after getting that job offer (kind of), I was wondering if you were interested in another kind of offer.", [
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
    Vibration.vibrate()
    setStatus("Recovered!")
    setTimeout(() => {BackHandler.exitApp()}, 4000)
    Alert.alert("Success!", "Software has successfully recovered! 🎉", [
      {text: "Ok"}
    ])
  }
  const no = () => {
    // Sadness
    Vibration.vibrate()
    setStatus("Failed to recover")
    setTimeout(() => {BackHandler.exitApp()}, 4000)
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
    top: 100,
  },
  text: {
    color: "orange",
    fontSize: 40,
  }
})