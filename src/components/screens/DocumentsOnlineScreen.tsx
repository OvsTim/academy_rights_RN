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
import {withPressable} from '../_CustomComponents/HOC/withPressable';
import {withFont} from '../_CustomComponents/HOC/withFont';
import DropShadow from 'react-native-drop-shadow';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'DocumentsOnline'>;
};
const Button = withPressable(View);
const StyledText = withFont(Text);
export default function DocumentsOnlineScreen({navigation}: Props) {
  const {width} = useWindowDimensions();

  const renderCard = (image: ImageSourcePropType, name: string) => {
    return (
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          alignSelf: 'center',
          shadowOpacity: 0.5,
          shadowRadius: 2.5,
          width: width - 48,
          marginVertical: 8,
          marginHorizontal: 8,
        }}>
        <View
          style={{
            width: width - 48,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 8,
            padding: 8,
            flexDirection: 'row',
          }}>
          <Image style={{width: 32, height: 32}} source={image} />
          <StyledText
            style={{
              width: (width / 3) * 2,
              color: '#143463',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: 15,
            }}>
            {name}
          </StyledText>
        </View>
      </DropShadow>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fafafa'}}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingBottom: 100,
        }}>
        <StyledText
          style={{
            fontSize: 28,
            fontWeight: '600',
            marginVertical: 32,
            marginHorizontal: 24,
          }}>
          {'Закажите документ, не выходя из дома!'}
        </StyledText>
        <StyledText
          style={{
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'left',
            marginBottom: 16,
            marginHorizontal: 24,
          }}>
          {'Преимущества услуги "Документы Онлайн"'}
        </StyledText>
        {renderCard(
          require('../../assets/outline_payments_black_36.png'),
          'Стоимость документа от 1000 рублей',
        )}
        {renderCard(
          require('../../assets/outline_schedule_black_36.png'),
          'Срок выполнения заказа от 3 часов до 1 дня',
        )}
        {renderCard(
          require('../../assets/outline_group_add_black_36.png'),
          'Консультация по Вашему вопросу включена в стоимость документа',
        )}
        {renderCard(
          require('../../assets/outline_thumb_up_off_alt_black_36.png'),
          'Оплата после составления документа',
        )}
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <Button
          onPress={() =>
            navigation.jumpTo('Feedback', {
              theme: 'Интересует услуга "Документы Онлайн"',
            })
          }
          containerStyle={{
            width: width - 50,
            backgroundColor: '#143463',
            height: 54,
            alignSelf: 'center',
            borderRadius: 8,
          }}>
          <StyledText
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'white',
            }}>
            Написать нам
          </StyledText>
        </Button>
        <View style={{height: 32}} />
      </View>
    </View>
  );
}
