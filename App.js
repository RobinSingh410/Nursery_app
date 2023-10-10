import React, { useEffect,useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Screens/Home';
import Carts from './components/Screens/Carts';
import Details from './components/Screens/Details'
import Checkout from './components/Screens/Checkout';
import Address_check from './components/Screens/Address_check';
import Payment_check from './components/Screens/Payment_check';
import Flash from './components/Screens/Flash';
import User from './components/Screens/User';
import Myorder from './components/Screens/Myorder';
import Wishlist from './components/Screens/Wishlist';
import Confirmation from './components/Screens/Confirmation';
import Main from './components/Screens/Main';
import Hydroponic from './components/Screens/Hydroponic';
import Pots from './components/Screens/Pots';
import Tools from './components/Screens/Tools';
import Manure from './components/Screens/Manure';
import Soil from './components/Screens/Soil';
import Care from './components/Screens/Care';
import Electronic from './components/Screens/Electronic';
import Accessory from './components/Screens/Accessory';
import Ornaments from './components/Screens/Ornaments';
import Login from './components/Screens/Login';

import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import inAppMessaging from '@react-native-firebase/in-app-messaging';

const Stack = createNativeStackNavigator();

function App() {

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

  const [initialRoute, setInitialRoute] = useState('Main');


  useEffect(() => {
    getToken();
  }, [])

  const getToken = async () => {
    let token = await messaging().getToken();
    //console.log(token);
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage.notification.body));
      displayNotifn(remoteMessage)
      console.log(remoteMessage.data.screen)

    });
    return unsubscribe;
  }, []);


  const displayNotifn = async (data) => {
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
   
    });

    // Display a notification
    await notifee.displayNotification({
      title: data.notification.title,
      body: data.notification.body,
      android: {
        channelId,
        //  smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        
        },
      },
    });
  }


  messaging().setBackgroundMessageHandler(async remoteMessage => {
    // console.log('Message handled in the background!', remoteMessage);
   displayNotifn(remoteMessage)
  
  });


  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    
    });
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
           
          );
        }
      });
  }, []);




  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Carts" component={Carts} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Address_check" component={Address_check} />
        <Stack.Screen name="Payment_check" component={Payment_check} />
        <Stack.Screen name="Flash" component={Flash} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Myorder" component={Myorder} />
        <Stack.Screen name="Wishlist" component={Wishlist} />

        <Stack.Screen name="Hydroponic" component={Hydroponic} />
        <Stack.Screen name="Pots" component={Pots} />
        <Stack.Screen name="Tools" component={Tools} />
        <Stack.Screen name="Manure" component={Manure} />
        <Stack.Screen name="Soil" component={Soil} />
        <Stack.Screen name="Care" component={Care} />
        <Stack.Screen name="Electronic" component={Electronic} />
        <Stack.Screen name="Accessory" component={Accessory} />
        <Stack.Screen name="Ornaments" component={Ornaments} />

        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

