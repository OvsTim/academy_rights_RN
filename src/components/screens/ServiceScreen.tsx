import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Service'>;
};

export default function ServiceScreen({}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ServiceScreen</Text>
    </View>
  );
}
