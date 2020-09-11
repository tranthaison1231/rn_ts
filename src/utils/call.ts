import { Platform, Linking, Alert } from 'react-native';

const call = (phoneNumber: string) => {
  const url = `${Platform.OS === 'ios' ? 'telprompt:' : 'tel:'}${phoneNumber}`;
  Linking.canOpenURL(url).then((canOpen) => {
    if (!canOpen) {
      return Alert.alert(`Invalid URL provided: ${url}`);
    } else {
      return Linking.openURL(url).catch((err) => Promise.reject(err));
    }
  });
};

export default call;
