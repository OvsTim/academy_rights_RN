import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import FloatingButton from '../_CustomComponents/FloatingButton';
import {withPressable} from '../_CustomComponents/HOC/withPressable';
import {withFont} from '../_CustomComponents/HOC/withFont';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Service'>;
};

const Button = withPressable(View);
const StyledText = withFont(Text);
export default function ServiceScreen({navigation}: Props) {
  const {width} = useWindowDimensions();

  const renderButton = (
    text: string,
    icon: ImageSourcePropType,
    message: string,
  ) => {
    return (
      <View>
        <Button
          onPress={() => {
            navigation.jumpTo('Feedback', {
              theme: message,
            });
          }}
          containerStyle={{
            width: width - 50,
            backgroundColor: '#143463',
            height: 54,
            alignSelf: 'center',
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}>
            <Image
              style={{
                width: 36,
                height: 36,
                tintColor: 'white',
                marginHorizontal: 32,
              }}
              source={icon}
            />
            <StyledText
              style={{
                width: width - 100,
                fontSize: 20,
                fontWeight: '600',
                color: 'white',
              }}>
              {text}
            </StyledText>
          </View>
        </Button>
        <View style={{height: 16}} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fafafa'}}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingBottom: 100,
        }}>
        <View style={{height: 48}} />
        {renderButton(
          'Автоюрист',
          require('../../assets/outline_directions_car_white_36.png'),
          'Автоюрист',
        )}
        {renderButton(
          'Жилищные споры',
          require('../../assets/outline_corporate_fare_black_36.png'),
          'Жилищные споры',
        )}
        {renderButton(
          'Банкротство',
          require('../../assets/outline_money_off_white_36.png'),
          'Банкротство',
        )}
        {renderButton(
          'Семейное право',
          require('../../assets/outline_family_restroom_white_36.png'),
          'Семейное право',
        )}
        {renderButton(
          'Гражданское право',
          require('../../assets/outline_person_white_36.png'),
          'Гражданское право',
        )}
        {renderButton(
          'Наследственные дела',
          require('../../assets/outline_description_white_36.png'),
          'Наследственные дела',
        )}
        {renderButton(
          'Трудовые споры',
          require('../../assets/outline_work_white_36.png'),
          'Трудовые споры',
        )}
        {renderButton(
          'Защита прав собственности',
          require('../../assets/outline_home_black_36.png'),
          'Интересуют услуги автоюриста',
        )}
      </ScrollView>
      <FloatingButton />
    </View>
  );
}
