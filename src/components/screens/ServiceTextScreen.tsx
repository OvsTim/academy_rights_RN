import React from 'react';
import {
    Image,
    ImageSourcePropType, Pressable,
    ScrollView,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import {withFont} from '../_CustomComponents/HOC/withFont';
import {withPressable} from '../_CustomComponents/HOC/withPressable';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'ServiceText'>;
};
const StyledText = withFont(Text);
const Button = withPressable(View);

export default function ServiceTextScreen({navigation}: Props) {
  const {width} = useWindowDimensions();

  const renderButton = (
    text: string,
    icon: ImageSourcePropType,
    message: string,
  ) => {
    return (
      <View>
        <Pressable
            android_ripple={{radius:200,color:'gray'}}
          onPress={() => {
            navigation.jumpTo('Feedback', {
              theme: message,
            });
          }}
          style={{
            width: width - 50,
            backgroundColor: '#2862AC',
            paddingVertical: 8,
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
                marginHorizontal: 16,
              }}
              source={icon}
            />
            <StyledText
              style={{
                width: width - 150,
                fontSize: 20,
                fontWeight: '600',
                color: 'white',
              }}>
              {text}
            </StyledText>
          </View>
        </Pressable>
        <View style={{height: 16}} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#DFF7FF'}}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginHorizontal: 24,
          paddingBottom: 100,
        }}>
        <View style={{height: 16}} />

        {renderButton(
          'Проверка контрагентов',
          require('../../assets/outline_work_white_36.png'),
          'Являюсь юридическим лицом',
        )}
        {renderButton(
          'Сопровождение деятельности организаций',
          require('../../assets/outline_work_white_36.png'),
          'Являюсь юридическим лицом',
        )}
        {renderButton(
          'Защита бизнеса',
          require('../../assets/outline_work_white_36.png'),
          'Являюсь юридическим лицом',
        )}
        {renderButton(
          'Составление договоров',
          require('../../assets/outline_work_white_36.png'),
          'Являюсь юридическим лицом',
        )}
        {renderButton(
          'Корпоративные споры',
          require('../../assets/outline_work_white_36.png'),
          'Являюсь юридическим лицом',
        )}
        {renderButton(
          'Помощь по административным делам',
          require('../../assets/outline_work_white_36.png'),
          'Являюсь юридическим лицом',
        )}
        {renderButton(
          'Представительство в арбитражных судах',
          require('../../assets/outline_work_white_36.png'),
          'Являюсь юридическим лицом',
        )}
      </ScrollView>
    </View>
  );
}
