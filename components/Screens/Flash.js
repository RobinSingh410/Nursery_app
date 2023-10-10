import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

const Flash = () => {
  return (
    <View style={{flex:1}}>
      <LottieView
        source={require('../Images/Image/animation_lm.json')}
        autoPlay
        loop={false}
        resizeMOde="cover"
      />
    </View>
  )
}

export default Flash

const styles = StyleSheet.create({})