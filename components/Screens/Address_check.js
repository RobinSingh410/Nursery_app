import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RazorpayCheckout from 'react-native-razorpay';
import { clearCart,addorder } from '../Redux/action'

const Address_check = ({ navigation }) => {

  const cartData = useSelector((state) => state.reducer);
  const [cartList, setCartList] = useState([]);
  const [price, setPrice] = useState(0)
  const [pltnm, setPltnm] = useState()
  const [pltimg, setPltimg] = useState()
  const [pltqty, setPltqty] = useState()
  const dispatch = useDispatch();

  const handleclearcart = () => {
    dispatch(clearCart())
  }

  const handleaddorder = (item) => {
    dispatch(addorder(item))
    
  }

const confirm = () =>{
   cartData.map(item => {
    dispatch(addorder(item))
   })
    handleclearcart(); 
    navigation.navigate('Confirmation')
}

  useEffect(() => {
    setCartList(cartData.length)
    let tempTotal = 0
    let name=""
    cartData.map(item => {

      tempTotal = tempTotal + item.price*item.qty + item.taxes*item.qty;
      name= name + item.plant_name + "  "
      setPrice(tempTotal);
      setPltimg(item.image)
      setPltnm(name)
      setPltqty(item.qty)
    });
  }, [cartData])

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', marginBottom: 6, padding: 10 }}>
        <View style={{ flex: 1, }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../Images/Logo/back.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 20, padding: 3 }}> Shipping Address  </Text>
        </View>

        <View style={{ flex: 1, alignItems: "flex-end", padding: 2, }}>
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

      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../Images/Image/Myself.jpeg')}
          style={{ width: 120, height: 120, margin: 8, borderRadius: 60 }}
        />
      </View>

      <View style={{ margin: 20, backgroundColor: '#E5E4E2', borderWidth: 1, borderRadius: 30, }}>

        <View style={{ flexDirection: 'row', padding: 8, }}>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}> User name : </Text>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}> Robin Singh </Text>
        </View>


        <View style={{ flexDirection: 'row', padding: 8, }}>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}> Phone no. : </Text>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}> +91 7972096404 </Text>
        </View>

        <View style={{ flexDirection: 'row', padding: 8, }}>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}> Address  : </Text>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}> 602 , Mahalaxmi Pride , {'\n'} 6th Lane , Rajarampuri , {'\n'} Takala side , Kolhapur</Text>
        </View>

        <View style={{ flexDirection: 'row',  }}>
          <View style={{ flexDirection: 'row', padding: 8, marginRight: 12, width: '46%' }}>
            <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}> City  : </Text>
            <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}> Kolhapur </Text>
          </View>

          <View style={{ flexDirection: 'row', padding: 8, marginRight: 5, width: '45%' }}>
            <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}> State  : </Text>
            <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}> MH  </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 8, marginBottom: 6 }}>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}> Pin  Code : </Text>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}> 416008 </Text>
        </View>


      </View>

      <View style={{ flexDirection: 'row', marginLeft: 25, marginBottom: 15 }}>
        <Image
          source={require('../Images/Logo/editp.png')}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{ color: 'black', fontSize: 20, marginLeft: 5 }}> Change Shipping Address </Text>

      </View>

      <View style={{ marginLeft: 20, marginRight: 20, backgroundColor: '#E5E4E2', borderWidth: 1, borderRadius: 30, }}>

        <View style={{ flexDirection: 'row', padding: 6, marginTop: 5 }}>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 10,  }}> Arrival date : </Text>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 5,  }}> 30/07/2023 </Text>
        </View>

        <View style={{ flexDirection: 'row', padding: 6 }}>
          <Text style={{ color: 'black', fontSize: 20, marginLeft: 10, fontWeight: 500 }}> Order summary : </Text>
          <Text style={{ color: 'black', fontSize: 20, marginLeft: 5, fontWeight: 500 }}> {cartList} </Text>
        </View>

        <View style={{ flexDirection: 'row', padding: 6, marginBottom: 8 }}>
          <Text style={{ color: 'black', fontSize: 20, marginLeft: 10, fontWeight: 500 }}> Total cost : </Text>
          <Text style={{ color: 'black', fontSize: 20, marginLeft: 5, fontWeight: 500 }}> {'₹ ' + price} </Text>
        </View>

      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: pltimg,
              currency: 'INR',
              key: 'rzp_test_tJv5zu5HwdLDVl', // Your api key
              amount: price*100,
              name: pltnm,
              prefill: {
                email: 'void@razorpay.com',
                contact: '7972096404',
                name: 'Robin Singh'
              },
              theme: {color: '#0000CD'}
            }
            RazorpayCheckout.open(options).then((data) => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
              console.log(data.razorpay_payment_id)
              confirm()
            }).catch((error) => {
              // handle failure
              alert(`Failed: Something went wrong during process`);
              console.log(`Error: ${error.code} | ${error.description}`);
             
            });
          
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 500, }}> Proceed to Payment </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Address_check

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {

    alignItems: 'center',
    backgroundColor: '#1AA260',
    padding: 10,
    margin: 10,
    borderRadius: 30,
  },
})