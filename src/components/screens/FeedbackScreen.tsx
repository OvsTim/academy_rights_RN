import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import BaseInput from '../_CustomComponents/BaseInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {withPressable} from '../_CustomComponents/HOC/withPressable';
import {withFont} from '../_CustomComponents/HOC/withFont';

type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Feedback'>;
};

export default function FeedbackScreen({}: Props) {
  const Button = withPressable(View);
  const {width} = useWindowDimensions();
  const StyledText = withFont(Text);

  return (
    <View style={{flex: 1, backgroundColor: '#DFF7FF'}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginHorizontal: 24,
          paddingBottom: 100,
        }}>
        <View>
          <BaseInput
            value={''}
            onTextChanges={term => {}}
            styleInput={{}}
            styleContainer={{}}
            editable={true}
            placeholder={'Введите имя'}
            showLabel={true}
            label={'Имя'}
            inputProps={{textContentType: 'name', keyboardType: 'default'}}
            labelStyle={{}}
          />
          <BaseInput
            value={''}
            onTextChanges={term => {}}
            styleInput={{}}
            styleContainer={{}}
            editable={true}
            placeholder={'Введите почту'}
            showLabel={true}
            label={'Email'}
            inputProps={{
              textContentType: 'emailAddress',
              keyboardType: 'email-address',
            }}
            labelStyle={{}}
          />
          <BaseInput
            value={''}
            onTextChanges={term => {}}
            styleInput={{}}
            styleContainer={{}}
            editable={true}
            placeholder={'Введите тему сообщения'}
            showLabel={true}
            label={'Тема'}
            inputProps={{}}
            labelStyle={{}}
          />
          <BaseInput
            value={''}
            onTextChanges={term => {}}
            styleInput={{minHeight: 200, justifyContent: 'flex-start'}}
            styleContainer={{}}
            editable={true}
            placeholder={'Введите сообщение'}
            showLabel={true}
            label={'Сообщение'}
            inputProps={{multiline: true, textAlignVertical: 'top'}}
            labelStyle={{}}
          />
          <View style={{height: 32}} />

          <Button
            onPress={() => {}}
            containerStyle={{
              width: width - 50,
              backgroundColor: '#2862AC',
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
              Отправить
            </StyledText>
          </Button>
          <View style={{height: 32}} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
