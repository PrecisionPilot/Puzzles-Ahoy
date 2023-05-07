import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function Circle( {index, setClicks, left, top} ) {
    const [clicked, setClicked] = React.useState(false);
    const handleTouch = () => {
        setClicked(true);
        setClicks((prev) => {
            const newClicks = [...prev];
            newClicks[index] = true;
            return newClicks;
        })
    }

    return (
        <TouchableWithoutFeedback onPress={ handleTouch }>
            <View style={[styles.circle, {backgroundColor: clicked ? "blue" : "lime", left: left, top: top}]} />
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: 1000,
        position: "absolute",
        width: 75,
        height: 75,
    }
})