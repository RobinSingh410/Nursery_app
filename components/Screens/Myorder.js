import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteorder } from '../Redux/action'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Myorder = ({ navigation }) => {

  const dispatch = useDispatch();

  const orderdata = useSelector((state) => state.orderreducers);

  const [orderlist, setOrderlist] = useState([]);

  const [price, setPrice] = useState(0)

  const handleremove = (item) => {
    dispatch(deleteorder(item.id))

  }

  useEffect(() => {
    setOrderlist(orderdata.length)
    let tempTotal = 0
    orderdata.map(item => {
      tempTotal = tempTotal + item.price * item.qty + item.taxes * item.qty;
      setPrice(tempTotal);

    });

  }, [orderdata])

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
          <Text style={{ color: 'black', fontSize: 20, padding: 3 }}> My Order  </Text>
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


      {orderdata.length > 0 ? (
        <View style={{ flex: 1 }}>

          <FlatList
            data={orderdata}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.btn}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Image
                          source={{ uri: (item.image) }}
                          style={{ width: 98, height: '98%', resizeMode: 'contain' }}
                        />
                      </View>

                      <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                          <View style={{ flex: 1 }}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: 5 }}> {item.plant_name}</Text>
                          </View>
                          <View style={{ flex: 0.1 }}>
                            <TouchableOpacity
                              onPress={() => handleremove(item)}
                            >
                              <Image
                                source={require('../Images/Logo/close.png')}
                                style={{ width: 18, height: 20 }}
                              />
                            </TouchableOpacity>

                          </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginTop: 3 }}>

                          <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }}> Cost : {'₹ ' + (item.price * item.qty + item.taxes * item.qty)} </Text>
                          </View>
                          <View style={{ flex: 1 }}>

                            <Text style={{ color: 'black', fontSize: 16, }}>Quantity : {item.qty}</Text>

                          </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10, marginBottom: 3 }}>
                          <Icon name="map-marker-radius" color="#2E8B57" size={22} />
                          <Text style={{ color: 'black', fontSize: 16, marginLeft: 2, }}> Track My Order  </Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 3, }}>

                          <View style={{ flex: 1, marginLeft: 5 }}>
                            <TouchableOpacity
                              style={[styles.btn1, { backgroundColor: '#50C878' }]}
                            //  onPress={onPress}

                            >
                              <Text style={{ color: 'black', fontSize: 16 }}>Replace</Text>
                            </TouchableOpacity>

                          </View>

                          <View style={{ flex: 1 }}>
                            <TouchableOpacity
                              style={[styles.btn1, { backgroundColor: '#FF8040' }]}
                            //  onPress={onPress}

                            >
                              <Text style={{ color: 'black', fontSize: 16 }}>Return</Text>
                            </TouchableOpacity>


                          </View>
                        </View>
                      </View>

                    </View>
                  </TouchableOpacity>

                </View>
              );
            }}
          />



        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Image
            source={require('../Images/Logo/order3.png')}
            style={{ width: 400, height: 500, }}

          />
          <Text style={{ fontSize: 32, textAlign: 'center', color: '#006A4E', fontWeight: 500,marginBottom:30 }}> Place Order </Text>


        </View>
      )
      }



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

export default Myorder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    width: '95%',
    height: 138,
    backgroundColor: '#FBFBF9',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    elevation: 10,
  },
  btn1: {
    width: '90%',
    height: 30,
    backgroundColor: '#FBFBF9',
    padding: 4,
    marginTop: 5,
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center'
  },
})