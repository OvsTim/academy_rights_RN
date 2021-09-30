import {FloatingAction} from 'react-native-floating-action';
import {Image, Linking, Platform} from 'react-native';
import React from 'react';

const actions = [
  {
    text: 'Позвонить',
    textStyle: {
      fontFamily: 'Montserrat-Regular',
      includeFontPadding: false,
      textAlign: 'center',
    },
    icon: require('../../assets/outline_local_phone_black_36.png'),
    name: 'call',
    position: 1,
  },
  {
    text: 'Написать в WhatsApp',
    textStyle: {
      fontFamily: 'Montserrat-Regular',
      includeFontPadding: false,
      textAlign: 'center',
    },
    icon: require('../../assets/WhatsApp.svg.png'),
    name: 'whatsApp',
    position: 1,
  },
];

const openApp = async (url: string, iosLink: string, androidLink: string) => {
  try {
    return await Linking.openURL(url);
  } catch (err) {
    const urlMarket = Platform.OS === 'ios' ? iosLink : androidLink;
    return await Linking.openURL(urlMarket);
  }
};

const isString = (str: string) =>
  Object.prototype.toString.call(str) === '[object String]';

export const openWhatsApp = async (number: string) => {
  if (!number) {
    return Promise.reject('no number provided');
  }

  if (!isString(number)) {
    return Promise.reject('number should be string');
  }

  return await openApp(
    `whatsapp://send?phone=${number}`,
    'itms-apps://itunes.apple.com/us/app/id310633997?mt=8',
    'market://details?id=com.whatsapp',
  );
};

export default function FloatingButton() {
  return (
    <FloatingAction
      dismissKeyboardOnPress={true}
      position={'right'}
      floatingIcon={
        <Image
          style={{width: 32, height: 32, tintColor: 'white'}}
          source={require('../../assets/outline_local_phone_black_36.png')}
        />
      }
      animated={true}
      actions={actions}
      onPressItem={name => {
        if (name === 'call') {
          Linking.openURL('tel:+79098854153');
        } else {
          openWhatsApp('+79241481765');
        }
      }}
    />
  );
}
