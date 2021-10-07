import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInput, useWindowDimensions, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import BaseInput from '../_CustomComponents/BaseInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {withPressable} from '../_CustomComponents/HOC/withPressable';
import {withFont} from '../_CustomComponents/HOC/withFont';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Feedback'>;
  route: RouteProp<MainStackParamList, 'Feedback'>;
};

export default function FeedbackScreen({route, navigation}: Props) {
  const Button = withPressable(View);
  const {width} = useWindowDimensions();
  const StyledText = withFont(Text);
  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const themeRef = useRef<TextInput>(null);
  const messageRef = useRef<TextInput>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [theme, setTheme] = useState<string>(
    route.params && route.params.theme ? route.params.theme : '',
  );
  const [message, setMessage] = useState<string>('');

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      themeRef.current?.setNativeProps({
        text: route.params && route.params.theme ? route.params.theme : '',
      });
    });

    return unsubscribe;
  }, [navigation, route]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', _ => {
      navigation.setParams({theme: ''});
    });
    return unsubscribe;
  }, [navigation, route]);

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
            inputRef={nameRef}
            value={name}
            onTextChanges={term => setName(term)}
            styleInput={{}}
            styleContainer={{}}
            editable={true}
            placeholder={'Введите имя'}
            showLabel={true}
            label={'Имя'}
            inputProps={{
              textContentType: 'name',
              keyboardType: 'default',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                emailRef.current?.focus();
              },
            }}
            labelStyle={{}}
          />
          <BaseInput
            inputRef={emailRef}
            value={email}
            onTextChanges={term => setEmail(term)}
            styleInput={{}}
            styleContainer={{}}
            editable={true}
            placeholder={'Введите почту'}
            showLabel={true}
            label={'Email'}
            inputProps={{
              textContentType: 'emailAddress',
              keyboardType: 'email-address',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                themeRef.current?.focus();
              },
            }}
            labelStyle={{}}
          />
          <BaseInput
            inputRef={themeRef}
            value={theme}
            onTextChanges={term => setTheme(term)}
            styleInput={{}}
            styleContainer={{}}
            editable={true}
            placeholder={'Введите тему сообщения'}
            showLabel={true}
            label={'Тема'}
            inputProps={{
              returnKeyType: 'next',
              onSubmitEditing: () => {
                messageRef.current?.focus();
              },
            }}
            labelStyle={{}}
          />
          <BaseInput
            inputRef={messageRef}
            value={message}
            onTextChanges={term => setMessage(term)}
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
