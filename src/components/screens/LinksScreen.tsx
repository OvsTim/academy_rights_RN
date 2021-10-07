import React, {useState} from 'react';
import {
  Image,
  Linking,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import {openWhatsApp} from '../_CustomComponents/FloatingButton';
import {withPressable} from '../_CustomComponents/HOC/withPressable';
import {withFont} from '../_CustomComponents/HOC/withFont';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Links'>;
};

export default function LinksScreen({}: Props) {
  const Button = withPressable(View);
  const {width} = useWindowDimensions();
  const StyledText = withFont(Text);
  const renderItem = (text: string, url: string) => {
    return (
      <>
        <View style={{height: 8}} />
        <Button
          onPress={() => Linking.openURL(url)}
          containerStyle={{
            backgroundColor: 'white',
            width: width - 32,
            borderRadius: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: width - 32,
              margin: 16,
              alignItems: 'center',
            }}>
            <Image
              style={{width: 40, height: 45, marginLeft: 16}}
              source={require('../../assets/logo_i.png')}
            />
            <View style={{marginLeft: 16, width: (width / 3) * 2}}>
              <StyledText style={{fontWeight: '600', fontSize: 17}}>
                {text}
              </StyledText>
              <StyledText style={{fontWeight: '500', fontSize: 17}}>
                {url}
              </StyledText>
            </View>
          </View>
        </Button>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#DFF7FF',
      }}>
      {renderItem('Официальный сайт Верховного суда РФ', 'http://www.vsrf.ru/')}
      {renderItem(
        'Официальный сайт Арбитражного суда г. Москвы',
        'http://www.msk.arbitr.ru/',
      )}
      {renderItem(
        'Суды общей юрисдикции г. Москвы',
        'http://www.mos-gorsud.ru/',
      )}
    </View>
  );
}
