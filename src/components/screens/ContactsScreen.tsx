import React from 'react';
import {
  FlatList,
  Image,
  Linking,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import {withPressable} from '../_CustomComponents/HOC/withPressable';
import {withFont} from '../_CustomComponents/HOC/withFont';
import {openWhatsApp} from '../_CustomComponents/FloatingButton';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Contacts'>;
};

const Button = withPressable(View);
const StyledText = withFont(Text);
export default function ContactsScreen({}: Props) {
  const {width} = useWindowDimensions();

  const renderItem = (
    text: string,
    type: 'phone' | 'wa' | 'inst',
    phone: string,
  ) => {
    return (
      <>
        <View style={{height: 8}} />
        <Button
          onPress={() => {
            switch (type) {
              case 'phone':
                Linking.openURL(
                  'tel:' +
                    phone.replace('-', '').replace('(', '').replace(')', ''),
                );
                break;
              case 'wa':
                openWhatsApp(
                  phone.replace('-', '').replace('(', '').replace(')', ''),
                );
                break;
              case 'inst':
                Linking.openURL('https://www.instagram.com/academyright/');
                break;
            }
          }}
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
            {type === 'phone' ? (
              <View
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  borderColor: 'black',
                  borderWidth: 1,
                }}>
                <Image
                  style={{
                    width: 32,
                    height: 32,
                  }}
                  source={require('../../assets/outline_local_phone_black_36.png')}
                />
              </View>
            ) : type === 'inst' ? (
              <Image
                style={{width: 40, height: 40, marginLeft: 16}}
                source={require('../../assets/Instagram_logo_2016.svg.png')}
              />
            ) : (
              <Image
                style={{width: 40, height: 40, marginLeft: 16}}
                source={require('../../assets/WhatsApp.svg.png')}
              />
            )}
            <View style={{marginLeft: 16, width: (width / 3) * 2}}>
              <StyledText style={{fontWeight: '600', fontSize: 17}}>
                {text}
              </StyledText>
              <StyledText style={{fontWeight: '500', fontSize: 17}}>
                {phone}
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
      <FlatList
        contentContainerStyle={{
          width,
          paddingBottom: 100,
          alignItems: 'center',
        }}
        keyExtractor={(item, index) => index.toString()}
        data={[
          {text: 'Телефон #1', phone: '+7(909)-885-41-53', type: 'phone'},
          {text: 'Телефон #2', phone: '+7(924)-148-17-65', type: 'phone'},
          {text: 'WhatsApp', phone: '+7(924)-148-17-65', type: 'wa'},
          {
            text: 'Отдел по уголовным делам',
            phone: '+7(909)-905-82-53',
            type: 'phone',
          },
          {
            text: 'Отдел по работе с юридическими лицами',
            phone: '+7(909)-905-79-29',
            type: 'phone',
          },
          {text: 'Instagram', phone: 'academyright', type: 'inst'},
        ]}
        renderItem={({item}) => renderItem(item.text, item.type, item.phone)}
      />
    </View>
  );
}
