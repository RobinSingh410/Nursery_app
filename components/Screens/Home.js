import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import notifee from '@notifee/react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Products from './Products'

import { product, Bedrm_Plt, Indoor, outdoor_plt } from './List'

const Home = ({ navigation }) => {

    const [input, setInput] = useState('')
    const [show, setShow] = useState(0)
    const cartData = useSelector((state) => state.reducer)
    const cartData1 = useSelector((state) => state.reducer1);

    const [cartItems, setCartItems] = useState(0)
    const [wishItems, setWishItems] = useState(0)

    useEffect(() => {
        setCartItems(cartData.length)

    }, [cartData])

    useEffect(() => {
        setWishItems(cartData1.length)

    }, [cartData1])


    {/* 
    const displayNotifn = async () => {
        await notifee.requestPermission()

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: 'Notification Title',
          body: 'Main body content of the notification',
          android: {
            channelId,
           // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
                id: 'default',
                launchActivity: 'default',
              },
          },
        });
      }
*/}



    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', padding: 10 }}>
                {/* 
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                    style={{ justifyContent: 'center', marginRight: 10 }}
                >
                    <Image
                        source={require('../Images/Logo/back.png')}
                        style={{ width: 12, height: 40 }}
                    />
                </TouchableOpacity>
*/}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                >
                    <Image
                        source={require('../Images/Logo/logo.png')}
                        style={{ width: 48, height: 48 }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: '#1AA260', fontSize: 26, paddingHorizontal: 10, fontWeight: 'bold', textAlign: 'center', }}> Balcony garden </Text>
                </View>

                <View style={{ flex: 0.2, alignItems: "flex-end", padding: 5, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Carts')}
                    >
                        <View style={{ flexDirection: 'row', }}>

                            <Image
                                source={require('../Images/Logo/cart.png')}
                                style={{ width: 34, height: 34 }}
                            />
                            {cartData.length > 0 ? (
                                <Text style={{ color: 'black', fontSize: 14, }}> {cartItems} </Text>
                            ) : (null)
                            }

                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 10 }}>

                <Image
                    source={require('../Images/Logo/search.png')}
                    style={{ width: 30, height: 40, resizeMode: 'contain', marginRight: 5, marginTop: 2 }}

                />
                <TextInput
                    onChangeText={(text) => setInput(text)}
                    style={styles.input}
                    placeholder="Search "
                    placeholderTextColor="#3A3B3C"
                    value={input}
                />

                <TouchableOpacity
                    style={styles.btn}
                  //  onPress={() => { displayNotifn() }}
                 // onPress={() => { navigation.navigate('Flash') }} 
                >

                    <Image
                        source={require('../Images/Logo/filter2.png')}
                        style={{ width: 30, height: 21, resizeMode: 'cover' }}

                    />
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => setShow(0)}
                    >
                        {(() => {
                            if (show === 0) {
                                return (
                                    <Text style={{ color: '#006A4E', fontSize: 18, textAlign: 'center', fontWeight: 500, paddingBottom: 8, borderBottomWidth: 3, borderColor: '#006A4E' }}> Popular </Text>
                                )
                            }

                            else {
                                return (
                                    <Text style={{ color: '#A9A9A9', fontSize: 18, textAlign: 'center', paddingBottom: 8, fontWeight: 500 }}> Popular </Text>
                                );
                            }
                        })()}
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => setShow(1)}
                    >
                        {(() => {
                            if (show === 1) {
                                return (
                                    <Text style={{ color: '#006A4E', fontSize: 18, textAlign: 'center', fontWeight: 500, paddingBottom: 8, borderBottomWidth: 3, borderColor: '#006A4E' }}> Bedroom </Text>
                                )
                            }

                            else {
                                return (
                                    <Text style={{ color: '#A9A9A9', fontSize: 18, textAlign: 'center', paddingBottom: 8, fontWeight: 500 }}> Bedroom </Text>
                                );
                            }
                        })()}

                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity

                        onPress={() => setShow(2)}
                    >
                        {(() => {
                            if (show === 2) {
                                return (
                                    <Text style={{ color: '#006A4E', fontSize: 18, textAlign: 'center', fontWeight: 500, paddingBottom: 8, borderBottomWidth: 3, borderColor: '#006A4E' }}> Indoor </Text>
                                )
                            }

                            else {
                                return (
                                    <Text style={{ color: '#A9A9A9', fontSize: 18, textAlign: 'center', paddingBottom: 8, fontWeight: 500 }}> Indoor </Text>
                                );
                            }
                        })()}

                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity

                        onPress={() => setShow(3)}
                    >
                        {(() => {
                            if (show === 3) {
                                return (
                                    <Text style={{ color: '#006A4E', fontSize: 18, textAlign: 'center', fontWeight: 500, paddingBottom: 8, borderBottomWidth: 3, borderColor: '#006A4E' }}> Outdoor </Text>
                                )
                            }

                            else {
                                return (
                                    <Text style={{ color: '#A9A9A9', fontSize: 18, textAlign: 'center', paddingBottom: 8, fontWeight: 500 }}> Outdoor </Text>
                                );
                            }
                        })()}

                    </TouchableOpacity>
                </View>


            </View>


            {(() => {

                if (show === 1) {
                    return (
                        <View style={{ flex: 1, padding: 10 }}>
                            <FlatList
                                data={Bedrm_Plt}
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <Products item={item} />}

                            />
                        </View>
                    )
                }
                if (show === 2) {
                    return (
                        <View style={{ flex: 1, padding: 10 }}>
                            <FlatList
                                data={Indoor}
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <Products item={item} />}

                            />
                        </View>
                    )
                }
                if (show === 3) {
                    return (

                        <View style={{ flex: 1, padding: 10 }}>
                            <FlatList
                                data={outdoor_plt}
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <Products item={item} />}

                            />
                        </View>
                    )
                }
                else {
                    return (
                        <View style={{ flex: 1, padding: 10 }}>
                            <FlatList
                                data={product}
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <Products item={item} />}

                            />
                        </View>
                    );
                }
            })()}

            <View style={{ flex: 0.1, backgroundColor: '#E5E4E2' }}>
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
                            <View style={{ flexDirection: 'row', }}>

                                <Icon name="heart-circle-outline" color="#2E8B57" size={32} paddingTop={7}
                                />
                                {cartData1.length > 0 ? (
                                    <Text style={{ color: '#004225', fontSize: 14, marginTop: 4, fontWeight: 600 }}>{wishItems}</Text>
                                ) : (null)
                                }
                            </View>
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


export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    input: {
        color: 'black',
        fontSize: 16,
        height: 42,
        width: '75%',
        borderRadius: 15,
        marginRight: 10,
        padding: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#E5E4E2'
    },
    btn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#54C571',
        padding: 10,
        borderRadius: 10,
    },

})
