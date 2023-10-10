import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { addToCart, addToWishlist, removeFromWishlist } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../Redux/action'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Info = ({ navigation }) => {
  const route = useRoute();
  const item = route.params.items

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleremoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item.id))
  }

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item))

  }

  const handleDecrement = (item) => {
    dispatch(decrement(item))
  }

  const handleIncrement = (item) => {
    dispatch(increment(item))
  }

  const cartData = useSelector((state) => state.reducer)
  const [cartItems, setCartItems] = useState(0)
  const [price, setPrice] = useState(0)
  const [show, setShow] = useState()
  

  const cartData1 = useSelector((state) => state.reducer1);

  useEffect(() => {
    setCartItems(cartData.length)

    let tempTotal = 0
    cartData.map(item => {
      tempTotal = tempTotal + item.price * item.qty;
      setPrice(tempTotal);
    });

  }, [cartData])

  useEffect(() => {

    if (show == 1) {
      cartData1.map(items => {
        if (items.id != item.id) {
          return (
            setShow(0)
          )
        }
      });
    }

    cartData1.map(items => {
      if (items.id == item.id) {
        return (
          setShow(1)
        )
      }

    });

  }, [cartData1])

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', margin: 8 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../Images/Logo/back.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: "flex-end", padding: 2 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Carts')}
          >
            <View style={{ flexDirection: 'row', }}>

              <Image
                source={require('../Images/Logo/cart.png')}
                style={{ width: 32, height: 32 }}
              />
              {cartData.length > 0 ? (
                <Text style={{ color: 'black', fontSize: 14, }}> {cartItems} </Text>
              ) : (null)
              }

            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: (item.image) }}
          style={{ width: "100%", height: "100%", resizeMode: 'cover' }}
        />
      </View>



      <View style={{ flex: 1, backgroundColor: '#E5E4E2', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 5 }}>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black', fontSize: 28, fontWeight: 500, marginTop: 12, marginLeft: 6 }}> {item.plant_name} </Text>

          <View style={{ flex: 1, marginTop: 16, alignItems: 'flex-end' }} >
            <TouchableOpacity style={styles.btn2} >

              <Text style={{ color: 'white', fontSize: 20, }}>{'₹ ' + item.price}</Text>
            </TouchableOpacity>
          </View>

        </View>

        <Text style={{ color: 'black', fontSize: 20, margin: 6 }}> {item.category} </Text>
        <Text style={{ color: 'black', fontSize: 16, margin: 5 }}> {item.description} </Text>


        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', margin: 15 }}>
              
              <TouchableOpacity
                style={styles.btn1}
               // onPress={() => handleIncrement(item)}
              >
                <Image
                  source={require('../Images/Logo/add.png')}
                  style={{ width: 20, height: 22, resizeMode: 'center' }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn1}
              >
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>{item.qty}</Text>

              </TouchableOpacity>


              <TouchableOpacity
                style={styles.btn1}
              //  onPress={() => handleDecrement(item)}

              >
                <Image
                  source={require('../Images/Logo/minus.png')}
                  style={{ width: 24, height: 26, resizeMode: 'center' }}
                />
              </TouchableOpacity>

              {cartData1.length > 0 ? (
                (() => {

                  if (show === 1) {
                    return (
                      <View style={{ marginTop: 6, marginLeft: 15 }}>
                        <TouchableOpacity
                          onPress={() => handleremoveFromWishlist(item)}
                        >
                          <Icon name="heart-circle-outline" color="#DC381F" size={42} />
                        </TouchableOpacity>
                      </View>
                    )
                  }

                  else {
                    return (
                      <View style={{ marginTop: 6, marginLeft: 15 }}>
                        <TouchableOpacity
                          onPress={() => handleAddToWishlist(item)}
                        >
                          <Icon name="heart-circle-outline" color="#A9A9A9" size={42} />
                        </TouchableOpacity>
                      </View>
                    );
                  }
                })()

              ) : (
                <View style={{ marginTop: 6, marginLeft: 15 }}>
                  <TouchableOpacity
                    onPress={() => handleAddToWishlist(item)}
                  >
                    <Icon name="heart-circle-outline" color="#A9A9A9" size={42} />
                  </TouchableOpacity>
                </View>
              )
              }

            </View>

          </View>

          <View style={{ flex: 0.9, margin: 5 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 500 }}> Buy </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>



    </SafeAreaView>
  )
}

export default Info

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    width: 150,
    height: 46,
    alignItems: 'center',
    backgroundColor: '#00A36C',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    elevation: 20,
  },
  btn1: {
    width: 32,
    height: 44,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 3,
    borderRadius: 10,
    elevation: 10,
  },
  btn2: {
    width: 110,
    height: 42,
    alignItems: 'stretch',
    backgroundColor: '#00A36C',
    padding: 6,
    paddingHorizontal: 18,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 20,

  },

})
