import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const User = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', marginBottom: 10, padding: 10 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../Images/Logo/back.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 20, padding: 3 }}> Profile </Text>
        </View>

        <View style={{ flex: 1, alignItems: "flex-end", padding: 2 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
          >
            <Image
              source={require('../Images/Logo/home.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: "white" }}>

        <View style={{ flex: 0.8, backgroundColor: "#E5E4E2", borderBottomLeftRadius: 100, marginBottom: 10, marginLeft: 10, borderTopLeftRadius: 100 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
              <Image
                source={require('../Images/Image/Myself.jpeg')}
                style={{ width: 130, height: 130, margin: 8, borderRadius: 70 }}
              />
            </View>

            <View style={{ flex: 1.5, justifyContent: 'center', }}>
              <Text style={{ color: 'black', fontSize: 22, marginBottom: 10, fontWeight: 500 }}> Robin Singh </Text>
              <Text style={{ color: 'black', fontSize: 18, marginBottom: 7 }}> Premium Member </Text>
              <Text style={{ color: 'black', fontSize: 18, marginBottom: 7 }}> +917972096404 </Text>
            </View>

          </View>

        </View>

        <View style={{ flex: 2, borderBottomRightRadius: 80, backgroundColor: "#A0D6B4", marginRight: 10, marginBottom: 10, borderTopRightRadius: 80, }}>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15, borderBottomWidth: 1.5, borderColor: "white" }}
          // onPress={() => { navigation.navigate('Home') }}
          >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>Manage account</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15, borderBottomWidth: 1.5, borderColor: "white" }}
            onPress={() => { navigation.navigate('Myorder') }}
          >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>Orders</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15, borderBottomWidth: 1.5, borderColor: "white" }}
          // onPress={() => { navigation.navigate('Home') }}
          >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>Payment & Currencies</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15, borderBottomWidth: 1.5, borderColor: "white" }}
          // onPress={() => { navigation.navigate('Home') }}
          >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>Coupon & Redeem</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15, borderBottomWidth: 1.5, borderColor: "white" }}
          // onPress={() => { navigation.navigate('Home') }}
          >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>Help Center</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15, borderBottomWidth: 1.5, borderColor: "white" }}
          // onPress={() => { navigation.navigate('Home') }}
          >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>Settings</Text>
          </TouchableOpacity>


        </View>

        <View style={{ flex: 0.25, justifyContent: 'flex-end', borderTopLeftRadius: 30, borderBottomLeftRadius: 30, marginLeft: 10, backgroundColor: "#FF6347", marginBottom: 10 }}>
          <TouchableOpacity
            style={styles.btn}
          //  onPress={onPress}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 500 }}> Log out</Text>
          </TouchableOpacity>

        </View>

      </View>

      <View style={{ flex: 0.085, backgroundColor: '#E5E4E2' }}>
        <View style={{ flexDirection: 'row', paddingTop: 4 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Home') }}
            >
              <Icon name="home-circle-outline" color="#2E8B57" size={32} padding={6}
              />

            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Wishlist') }}
            >
              <Icon name="heart-circle-outline" color="#2E8B57" size={32} padding={6}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Myorder') }}
            >
              <Icon name="package-variant-closed" color="#2E8B57" size={32} padding={6}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => { navigation.navigate('User') }}
            >
              <Icon name="account" color="#2E8B57" size={32} padding={6}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </SafeAreaView>
  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    alignItems: 'center',
    padding: 10

  },
})