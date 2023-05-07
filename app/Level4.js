import React, { useEffect } from 'react';
import { StyleSheet, View, Alert, Image, TextInput, Button, Vibration } from 'react-native';

export default function Level4( {nextLevel} ) {

  const executePlan = () => {
    Vibration.vibrate();
    nextLevel()
  }

  return (
    <>
      <Image style={styles.image} source={require('./Assets/Calculus.png')} />
      <View style={styles.submission}>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} placeholder="Answer" onChangeText={executePlan} />
        <Button title="Submit" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 70,
    alignSelf: "center",
    position: "absolute",
    top: 100,
  },
  submission: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  }
})