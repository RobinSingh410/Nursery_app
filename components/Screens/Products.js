import { StyleSheet, Image, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { addToCart, removeFromWishlist, addToWishlist } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native'

const Products = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }

    const handleremoveFromWishlist = (item) => {
        dispatch(removeFromWishlist(item.id))
    }

    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item))

    }

    const [show, setShow] = useState()

    const cartData1 = useSelector((state) => state.reducer1);

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

            <TouchableOpacity
                style={styles.card}
                onPress={() => { navigation.navigate('Details', { items: item }) }}
            >
                <View style={{ width: '100%' }}>
                    <Image
                        source={{ uri: (item.image) }}
                        style={{ width: '100%', height: 100, resizeMode: 'contain', marginBottom: 10, marginTop: 10, borderRadius: 10 }}
                    />

                    <Text style={{ marginLeft: 10, fontSize: 18, color: 'black', fontWeight: 500, marginBottom: 2 }}>
                        {item.plant_name}
                    </Text>
                    <Text style={{ marginLeft: 10, fontSize: 16, color: 'black', marginBottom: 5 }}>
                        {item.category}
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ marginLeft: 10, fontSize: 18, color: 'black', fontWeight: 500 }}>
                                {'₹ ' + item.price}
                            </Text>
                        </View>


                        {cartData1.length > 0 ? (
                            (() => {

                                if (show === 1) {
                                    return (
                                        <View style={{ alignItems: 'flex-end', marginTop: 8, flex: 0.5 }}>
                                            <TouchableOpacity
                                                onPress={() => handleremoveFromWishlist(item)}
                                            >
                                                <Icon name="heart-circle-outline" color="#FF6347" size={28} padding={5} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }

                                else {
                                    return (
                                        <View style={{ alignItems: 'flex-end', marginTop: 8, flex: 0.5 }}>
                                            <TouchableOpacity
                                                onPress={() => handleAddToWishlist(item)}
                                            >
                                                <Icon name="heart-circle-outline" color="#CECECE" size={28} padding={5} />
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }
                            })()

                        ) : (
                            <View style={{ alignItems: 'flex-end', marginTop: 8, flex: 0.5 }}>
                                <TouchableOpacity
                                    onPress={() => handleAddToWishlist(item)}
                                >
                                    <Icon name="heart-circle-outline" color="#CECECE" size={28} padding={5} />
                                </TouchableOpacity>
                            </View>
                        )
                        }





                        <View style={{ flex: 0.6, alignItems: 'flex-end', marginBottom: 5, }}>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleAddToCart(item)}
                            >
                                <Image
                                    source={require('../Images/Logo/addition.png')}
                                    style={{ width: 15, height: 15, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#3CB371',
        padding: 8,
        borderRadius: 10,
        margin: 10,
    },
    card: {
        borderRadius: 20,
        elevation: 10,
        width: '98%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#fff',

    },
})