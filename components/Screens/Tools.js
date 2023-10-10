import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'

import React from 'react'

const Tools = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', marginBottom: 10, padding: 10 }}>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity

          >
            <Image
              source={require('../Images/Logo/logo.png')}
              style={{ width: 48, height: 48 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ color: '#1AA260', fontSize: 26, paddingHorizontal: 10, fontWeight: 'bold', }}> Balcony garden </Text>
        </View>

        <View style={{ flex: 0.3, alignItems: "flex-end", padding: 5, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main')}
          >
            <Image
              source={require('../Images/Logo/home.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Tools

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

})