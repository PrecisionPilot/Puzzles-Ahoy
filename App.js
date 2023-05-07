import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Level1 from './app/Level1';
import Level2 from './app/Level2';
import Level3 from './app/Level3';

export default function App() {
  const [level, setLevel] = React.useState(1);
  const nextLevel = () => {
    setLevel(level + 1);
  }

  return (
    <View style={styles.container}>
      { level === 1 ? <Level1 nextLevel={nextLevel}/> : null }
      { level === 2 ? <Level2 nextLevel={nextLevel}/> : null }
      { level === 3 ? <Level3 nextLevel={nextLevel}/> : null }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cadetblue",
    flex: 1,
  }
})