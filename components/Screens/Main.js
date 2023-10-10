import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import notifee from '@notifee/react-native';

const Main = ({ navigation }) => {

    const [input, setInput] = useState('')

   

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', padding: 10 }}>
                <TouchableOpacity
               // onPress={() => { displayNotifn() }}
                >
                    <Image
                        source={require('../Images/Logo/logo.png')}
                        style={{ width: 48, height: 48 }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: '#1AA260', fontSize: 26, paddingHorizontal: 10, fontWeight: 'bold', textAlign: 'center', }}>Balcony garden </Text>
                </View>

            </View>

            <ScrollView style={{ flex: 1, }}>

                <View style={{ flex: 1, }}>

                    <View style={{ flexDirection: 'row', padding: 10, }}>


                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Home') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/buy.png')}
                                    style={{ width: '98%', height: 114, resizeMode: 'contain', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Buy plant </Text>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Hydroponic') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/hydroponic.png')}
                                    style={{ width: '100%', height: 114, resizeMode: 'contain', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Hydroponic </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', padding: 10, }}>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Pots') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/pot.png')}
                                    style={{ width: '100%', height: 120, resizeMode: 'cover', borderRadius: 20,}}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Pots </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Tools') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                     source={require('../Images/Image/tools.png')}
                                    style={{ width: '100%', height: 120, resizeMode: 'contain', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight:500}}> Tools </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', padding: 10, }}>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Manure') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/fertilizers.jpg')}
                                    style={{ width: '100%', height: 114, resizeMode: 'contain', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Plant Manure </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Soil') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/soil.png')}
                                    style={{ width: '100%', height: 114, resizeMode: 'contain', borderRadius: 20,backgroundColor:'white' }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Soil </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10, }}>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Care') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/care.png')}
                                    style={{ width: '100%', height: 114, resizeMode: 'cover', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight:500}}> Plant Care </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Electronic') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/elec1.png')}
                                    style={{ width: '100%', height: 114, resizeMode:'cover', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Electronic </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', padding: 10,marginBottom:10 }}>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Accessory') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/access.png')}
                                    style={{ width: '100%', height: 114, resizeMode: 'contain', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Accessory </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => { navigation.navigate('Ornaments') }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={require('../Images/Image/ornament.png')}
                                    style={{ width: '100%', height: 114, resizeMode:'cover', borderRadius: 20 }}

                                />
                            </View>

                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: 'black', fontSize: 18,fontWeight:500 }}> Art Ornaments </Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F6F0',
    },
    input: {
        color: 'black',
        fontSize: 16,
        height: 42,
        width: '85%',
        borderRadius: 15,
        marginRight: 10,
        padding: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#E5E4E2'
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        height: 150,
        width: '90%',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
    }
})