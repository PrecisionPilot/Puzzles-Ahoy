import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import Circle from './Circle';

export default function Level1( {nextLevel} ) {
  // Create random positions such that the circles aren't touching
  // Make circles in an arrange ment of 3x3
  let circlePositions = [[50, 50], [150,  50], [250,  50], [50, 150], [150, 150], [250, 150], [50, 250], [150, 250], [250, 250]]
  const [clicks, setClicks] = React.useState([false, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    // Check if all circles have been clicked
    if (clicks.every((elem) => elem === true)) {
      Alert.alert("You win!", "Yeeeehawwwww", [{text: "Next Level", onPress: nextLevel}])
    }
  }, [clicks])

  return (
    <>
      {
        circlePositions.map((position, i) => {
          return <Circle key={i} index={i} setClicks={setClicks} left={position[0]} top={position[1]} />
        })
      }
    </>
  )
}