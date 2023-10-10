import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Confirmation = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#00BFFF', '#B3D9D9']}
        style={styles.linearGradient}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

          <Image
            source={require('../Images/Logo/confirm.png')}
            style={{ width: 180, height: 180 ,marginBottom:40 }}
          />

          <Text style={{ color: '#033E3E', fontSize: 26, fontWeight: 500,marginBottom:30 }}> Order Confirmed !! </Text>
          <TouchableOpacity
          style={{marginBottom:10}}
            onPress={() => { navigation.navigate('Home') }}
          >
            <Text style={{ color: '#033E3E', fontSize: 26, fontWeight: 500 }}> Continue shopping </Text>
           
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Home') }}
          >
            <Text style={{ color: '#033E3E', fontSize: 26, fontWeight: 500 }}> Go back to Home  </Text>
           
          </TouchableOpacity>

        </View>

      </LinearGradient>

    </SafeAreaView>
  )
}

export default Confirmation

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
})