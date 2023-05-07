import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, StyleSheet, View, Alert} from 'react-native';

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
        Alert.alert("Recovering", "You see, after getting that job offer (well kind of), I was wondering if you're interested in another kind of offer.", [
          {text: "Mhm", onPress: () => setStatus("Superthinking ...")},
        ])
      }, 2000)
    }
    else if (status === "Superthinking ...") {
      setTimeout(() => {
        Alert.alert("Coping", "As friends, Will you go out to prom with me?", [
          {text: "No", onPress: no},
          {text: "Yes", onPress: yes},
        ])
      }, 4000)
    }
  }, [status])
  
  const yes = () => {
    // Confetti
  }
  const no = () => {
    // Sadness
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