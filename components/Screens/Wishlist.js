import { StyleSheet, Text, View, SafeAreaView, FlatList,TouchableHighlight,   Alert , TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist, addToCart } from '../Redux/action'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Wishlist = ({ navigation }) => {

  const cartData1 = useSelector((state) => state.reducer1);
  const cartData = useSelector((state) => state.reducer)

  const [wishItems, setWishItems] = useState(0)
  const [cartItems, setCartItems] = useState(0)

  const dispatch = useDispatch();

  const handleremoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item.id))
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  useEffect(() => {
    setCartItems(cartData.length)
  }, [cartData])

  useEffect(() => {
    setWishItems(cartData1.length)
  }, [cartData1])


  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', marginBottom: 6, padding: 10 }}>
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
          <Text style={{ color: 'black', fontSize: 20, padding: 3 }}> Wishlist  </Text>
        </View>

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

      {cartData1.length > 0 ? (
        <View style={{ flex: 1, padding: 10, marginRight: 10, marginLeft: 10 }}>

          <FlatList
            data={cartData1}
            renderItem={({ item }) => {
              return (
                <View >
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
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: 10,marginBottom:2 }}> {item.plant_name}</Text>

                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: 10,marginBottom:2 }}> {'₹ ' + item.price} </Text>

                        <View style={{  marginLeft: 10, }}>

                            <TouchableOpacity
                              style={{ margin: 2 }}
                              onPress={() => handleAddToCart(item)}
                            >
                              <Text style={{ color: '#008000', fontSize: 16, fontWeight: 500 }}>ADD TO CART </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                              style={{ margin: 2 }}
                              onPress={() => handleremoveFromWishlist(item)}
                            >
                              <Text style={{ color: '#FF2400', fontSize: 16, fontWeight: 500 }}>REMOVE FROM WISHLIST </Text>
                            </TouchableOpacity>

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
            source={require('../Images/Logo/empty.png')}
            style={{ width: 350, height: 320 }}
          />
          <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', color: '#2E8B57', fontWeight: 500 }}> Your Wishlist is empty  !!</Text>

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

export default Wishlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    width: '97%',
    height: 120,
    backgroundColor: '#FBFBF9',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    elevation: 10,
  },
  touchable: {
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5'
  },
})