import React, { Component } from 'react'
import { View, Animated } from 'react-native'

// 1. Where is the position of the item? 
// 2. Where are we moving the position to?
// 3. What element are we animating? 

class Ball extends Component {
    componentWillMount(){
        this.position = new Animated.ValueXY(0, 0) // starting position
        Animated.spring(this.position, {
            toValue: {
                x: 200, y: 500 // Animate to coordinates
            }
        }).start() // Execute animation
    }

    render(){
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        )
    }
}

const styles = {
    ball: {
        height: 60, 
        width: 60, 
        borderRadius: 30, 
        borderWidth: 30, 
        borderColor: 'white'
    }
}

export default Ball