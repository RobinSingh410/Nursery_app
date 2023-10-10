import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/action'

const Checkout = ({ navigation }) => {

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer);
  const [cartList, setCartList] = useState([]);
  const [price, setPrice] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const [mrpPrice, setMrpPrice] = useState(0)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id))
  }

  useEffect(() => {
    setCartList(cartData.length)
    let tempTotal = 0
    let tempMRP=0
    let tempTax=0

    cartData.map(item => {

      tempTotal = tempTotal + item.price*item.qty + item.taxes*item.qty;
      tempMRP = tempMRP + item.price*item.qty 
      tempTax = tempTax + item.taxes*item.qty;
      setPrice(tempTotal);
      setMrpPrice(tempMRP);
      setTaxes(tempTax)
    });
  
  }, [cartData])


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
          <Text style={{ color: 'black', fontSize: 20, padding: 3 }}> Checkout  </Text>
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

      {cartData.length > 0 ? (
        <View style={{ flex: 1 }}>

          <View style={{ flexDirection: 'row', padding: 8, backgroundColor: '#E5E4E2', marginBottom: 10 }}>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 5, fontWeight: 500 }}> Order summuary : </Text>
            <Text style={{ flex: 1, color: 'black', fontSize: 20, textAlign: 'right', marginRight: 10 }}> {cartList}  </Text>
          </View>

          <View style={{ flex: 1, }}>

            <FlatList
              data={cartData}
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
                          <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: 5 }}> {item.plant_name}</Text>
                          <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }}> {item.category}  </Text>
                          <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: 5,marginTop:3 }}> Total price : {'₹ ' + item.price*item.qty} </Text>

                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: 5 ,marginRight:5}}> Quantity :  {item.qty} </Text>

                            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10,}}>

                              <TouchableOpacity
                                onPress={() => handleRemoveFromCart(item)}

                              >
                                <Image
                                  source={require('../Images/Logo/delete2.png')}
                                  style={{ width: 24, height: 24 }}
                                />
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

          <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
            <View style={{ backgroundColor: '#E5E4E2', paddingTop: 10, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>



              <View style={{ flexDirection: 'row', padding: 6 }}>
                <Text style={{ color: '#3A3B3C', fontSize: 18, marginLeft: 5 }}> Total MRP : </Text>
                <Text style={{ flex: 1, color: '#3A3B3C', fontSize: 18, textAlign: 'right', marginRight: 10 }}> {'₹ ' + mrpPrice} </Text>
              </View>

              <View style={{ flexDirection: 'row', padding: 6, }}>
                <Text style={{ color: '#3A3B3C', fontSize: 18, marginLeft: 5 }}> Taxes : </Text>
                <Text style={{ flex: 1, color: '#3A3B3C', fontSize: 18, textAlign: 'right', marginRight: 10 }}>  { " + " + ' ₹ ' + taxes} </Text>
              </View>

              <View style={{ flexDirection: 'row', padding: 6, }}>
                <Text style={{ color: '#3A3B3C', fontSize: 18, marginLeft: 5 }}> Shipping cost : </Text>
                <Text style={{ flex: 1, color: '#3A3B3C', fontSize: 18, textAlign: 'right', marginRight: 10 }}> +  ₹ 00.00 </Text>
              </View>

              <View style={{ flexDirection: 'row', borderBottomWidth: 1.2, padding: 6, borderColor: '#00A36C', paddingBottom: 10 }}>
                <Text style={{ color: '#3A3B3C', fontSize: 18, marginLeft: 5 }}> Discount on MRP : </Text>
                <Text style={{ flex: 1, color: '#3A3B3C', fontSize: 18, textAlign: 'right', marginRight: 10 }}> -  ₹ 00.00 </Text>
              </View>



              <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 5 }}>

                <Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }}> Total Amount : </Text>

                <Text style={{ flex: 1, color: 'black', fontSize: 20, fontWeight: 500, textAlign: 'right', marginRight: 10 }}> {'₹ ' + price}  </Text>

              </View>

              <TouchableOpacity
                style={styles.btn2}
                onPress={() => { navigation.navigate('Address_check') }}
              >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 500 }}>Proceed</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      ) : (
        <View style={{ flex: 1, }}>
        <View style={{ flex: 1, }}>

        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end',alignItems:"center" }}>
          <Image
            source={require('../Images/Logo/emptycart.png')}
            style={{ width: 450, height: 400,resizeMode: 'cover' }}

          />
        </View>

        <View style={{ flex: 1, }}>
          <Text style={{  fontSize: 32, textAlign: 'center', color: '#006A4E', fontWeight: 500 }}> Your cart is empty  !!</Text>
        </View>

      </View>
      )
      }


    </SafeAreaView>

  )
}


export default Checkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    width: '95%',
    height: 120,
    backgroundColor: '#FBFBF9',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 10,
    marginBottom: 20,
  },
  btn1: {
    width: 24,
    height: 30,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#50C878',
    padding: 4,
    margin: 3,
    borderRadius: 10,
    elevation: 10,
  },
  btn2: {
    alignItems: 'center',
    backgroundColor: '#00A36C',
    padding: 8,
    margin: 10,
    borderRadius: 20,
  },
})