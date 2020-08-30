/* eslint-disable @typescript-eslint/no-unused-vars */
// import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
// import { setTokenFirebase } from './Configuration';
// import { replaceNotify } from './db/SqliteDb';
// import AsyncStorage from '@react-native-community/async-storage';
// import type { RemoteMessage } from 'react-native-firebase';

// async function registerAppWithFCM() {
//   Platform.OS === 'ios' &&
//     (await firebase.messaging().registerDeviceForRemoteMessages());
// }

// async function requestUserPermission(callback) {
//   const settings = await firebase.messaging().requestPermission();

//   callback(settings);
//   if (settings) {
//     console.log('Permission settings:', settings);
//   }
// }

// async function requestTokenFirebase() {
//   if (Platform.OS === 'android') {
//     const channel = new firebase.notifications.Android.Channel(
//       'bluezone-channel',
//       'Test Channel',
//       firebase.notifications.Android.Importance.Max,
//     ).setDescription('My apps test channel');

//     // Create the channel
//     firebase.notifications().android.createChannel(channel);
//   }

//   firebase
//     .messaging()
//     .getToken()
//     .then((token) => {
//       return setTokenFirebase(token);
//     });

//   firebase.messaging().onTokenRefresh((token) => {
//     return setTokenFirebase(token);
//   });
// }

// async function registerBackgroundMessageHandler(message: RemoteMessage) {
//   const language = await AsyncStorage.getItem('Language');
//   replaceNotify(message, language);
//   return Promise.resolve();
// }

// async function registerMessageHandler(callback) {
//   return firebase.messaging().onMessage(callback);
// }

// function getTokenFirebase(success, failure) {
//   firebase.messaging().getToken().then(success).catch(failure);
// }

// function pushNotify(notifyObj, language = 'vi') {
//   const notification = new firebase.notifications.Notification()
//     .setNotificationId(notifyObj.data.notifyId)
//     .setTitle(language !== 'vi' ? notifyObj.data.titleEn : notifyObj.data.title)
//     .setBody(
//       language !== 'vi' ? notifyObj.data.bigTextEn : notifyObj.data.bigText,
//     )
//     .setData({
//       ...notifyObj.data,
//     })
//     .android.setBigText(
//       language !== 'vi' ? notifyObj.data.bigTextEn : notifyObj.data.bigText,
//     );
//   if (Platform.OS === 'android') {
//     notification.android
//       .setChannelId('bluezone-channel')
//       .android.setSmallIcon('icon_bluezone_service');
//   }

//   firebase.notifications().displayNotification(notification);
// }

// export {
//   requestUserPermission,
//   requestTokenFirebase,
//   registerAppWithFCM,
//   registerBackgroundMessageHandler,
//   registerMessageHandler,
//   getTokenFirebase,
//   pushNotify,
// };
