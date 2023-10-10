import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart,addorder } from '../Redux/action'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Payment_check = ({ navigation }) => {

  const [selectedRadio, setSelectedRadio] = useState(0)
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.reducer);

  const [cartList, setCartList] = useState([]);

  const [price, setPrice] = useState(0)

  const handleclearcart = () => {
    dispatch(clearCart())
  }

  const handleaddorder = (item) => {
    dispatch(addorder(item))
    
  }

  useEffect(() => {
    setCartList(cartData.length)
    let tempTotal = 0
    cartData.map(item => {

      tempTotal = tempTotal + item.price * item.qty + item.taxes * item.qty;
      setPrice(tempTotal);

    });

  }, [cartData])

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', marginBottom: 2, padding: 10 }}>
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
          <Text style={{ color: 'black', fontSize: 20, padding: 3 }}> Payment   </Text>
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


      <TouchableOpacity
        style={styles.btn}
      // onPress={onPress}
      >
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => (setSelectedRadio(1))}>
              <View style={styles.wrapper}>
                <View style={styles.radio}>
                  {
                    selectedRadio === 1 ? <View style={styles.radioBg}></View> : null
                  }
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: "#E9E4D4", borderRadius: 30 }}
            >
              <Icon name="credit-card" color="#033E3E" size={30} padding={6}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}> Credit/Debit Card </Text>
            </View>

          </View>

          <View style={{ alignItems: "center", marginHorizontal: 50, flexDirection: 'row' }}>
            <Text style={{ color: '#045D5D', fontSize: 18, fontWeight: 500 }}> Add new Card </Text>
            <View style={{ marginLeft: 10, }}>
              <Image
                source={require('../Images/Logo/visa-icon.png')}
                style={{ width: 45, height: 40 }}
              />
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                source={require('../Images/Logo/master-card-icon.png')}
                style={{ width: 45, height: 40 }}
              />
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                source={require('../Images/Logo/rupay-logo-icon.png')}
                style={{ width: 45, height: 40 }}
              />
            </View>
          </View>

        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.btn}
      // onPress={onPress}
      >

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => (setSelectedRadio(2))}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {
                  selectedRadio === 2 ? <View style={styles.radioBg}></View> : null
                }
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "#E9E4D4", borderRadius: 30 }}
          >
            <Icon name="contactless-payment" color="#033E3E" size={30} padding={6}
            />
          </TouchableOpacity>

          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}> UPI </Text>
          </View>
          <View style={{ marginLeft: 10, }}>
            <Image
              source={require('../Images/Logo/upi-icon.png')}
              style={{ width: 40, height: 45 }}
            />
          </View>
          <View style={{ marginLeft: 10, }}>
            <Image
              source={require('../Images/Logo/google-pay-icon.png')}
              style={{ width: 40, height: 35, resizeMode: 'contain' }}
            />
          </View>
          <View style={{ marginLeft: 10, }}>
            <Image
              source={require('../Images/Logo/phonepe-icon.png')}
              style={{ width: 40, height: 35, resizeMode: 'contain' }}
            />
          </View>
          <View style={{ marginLeft: 10, }}>
            <Image
              source={require('../Images/Logo/paytm-icon.png')}
              style={{ width: 40, height: 20, resizeMode: 'contain' }}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
      // onPress={onPress}
      >

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => (setSelectedRadio(3))}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {
                  selectedRadio === 3 ? <View style={styles.radioBg}></View> : null
                }
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "#E9E4D4", borderRadius: 30 }}
          >
            <Icon name="domain" color="#033E3E" size={30} padding={6}
            />
          </TouchableOpacity>

          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}> Bank Transfer </Text>
          </View>

        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
      // onPress={onPress}
      >

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => (setSelectedRadio(4))}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {
                  selectedRadio === 4 ? <View style={styles.radioBg}></View> : null
                }
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "#E9E4D4", borderRadius: 30 }}
          >
            <Icon name="wallet" color="#033E3E" size={30} padding={6}
            />
          </TouchableOpacity>

          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}> E - Wallet </Text>
          </View>

        </View>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.btn}
      // onPress={onPress}
      >

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => (setSelectedRadio(5))}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {
                  selectedRadio === 5 ? <View style={styles.radioBg}></View> : null
                }
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "#E9E4D4", borderRadius: 30 }}
          >
            <Icon name="cash" color="#033E3E" size={30} padding={6}
            />
          </TouchableOpacity>

          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}> Cash on Delivery </Text>
          </View>

        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
      // onPress={onPress}
      >

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => (setSelectedRadio(6))}>
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {
                  selectedRadio === 6 ? <View style={styles.radioBg}></View> : null
                }
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "#E9E4D4", borderRadius: 30 }}
          >
            <Icon name="account-search" color="#033E3E" size={30} padding={6}
            />
          </TouchableOpacity>

          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500 }}> Other Option </Text>
          </View>

        </View>
      </TouchableOpacity>

      <View style={{ flex: 1, backgroundColor: '#DADBDD', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: 10 }}>

        <View style={{ flexDirection: 'row', padding: 6, marginTop: 5 }}>
          <Text style={{ color: '#3A3B3C', fontSize: 18, marginLeft: 7 }}> Total no. of Items : </Text>
          <Text style={{ flex: 1, color: '#3A3B3C', fontSize: 18, textAlign: 'right', marginRight: 12 }}> {cartList}  </Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}>

          <Text style={{ color: 'black', fontSize: 20, marginLeft: 12 }}> Total Amount : </Text>

          <Text style={{ flex: 1, color: 'black', fontSize: 20, fontWeight: 500, textAlign: 'right', marginRight: 12 }}> {'₹ ' + price}  </Text>

        </View>
     
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {   { cartData.map(item => {
            handleaddorder(item)
           })}  ;navigation.navigate('Confirmation'); handleclearcart() }}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 500 }}>Confirm Order</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Payment_check

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    elevation: 10,
    marginBottom: 8,
  },
  radio: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 3.3,
  },
  radioBg: {
    backgroundColor: '#3B9C9C',
    height: 5,
    width: 5,
    borderRadius: 20,
    margine: 5,
    padding: 6,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  btn2: {
    alignItems: 'center',
    backgroundColor: '#00A36C',
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7,
    marginTop: 7,
    borderRadius: 30,
  },
})