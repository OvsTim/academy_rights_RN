import React, {useEffect, useRef, useState} from 'react';
import {Alert, Text, TextInput, useWindowDimensions, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import BaseInput from '../_CustomComponents/BaseInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {withPressable} from '../_CustomComponents/HOC/withPressable';
import {withFont} from '../_CustomComponents/HOC/withFont';
import {RouteProp} from '@react-navigation/native';
import RNSmtpMailer from 'react-native-smtp-mailer';

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
  const [loading, setLoading] = useState<boolean>(false);

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

  function validateEmail(email: string): boolean {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function onContinuePress() {
    if (!email) {
      Alert.alert('Ошибка', 'Укажте почту для обратной связи');
      return;
    }

    if (!message) {
      Alert.alert('Ошибка', 'Напишите текст обращения');
      return;
    }

    if (!validateEmail(email.trim())) {
      Alert.alert('Ошибка', 'Введенный почтовый ящик не является корректным');
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);
    RNSmtpMailer.sendMail({
      mailhost: 'smtp.gmail.com',
      port: '465',
      ssl: true,
      username: 'academyRightNoReply@gmail.com',
      password: 'Aa111111!',
      fromName: name, // optional
      replyTo: email.trim(), // optional
      recipients: 'ovstim@mail.ru',
      subject: theme ? theme : 'Новое сообщение',
      htmlBody: message + '\nПочта для обратной связи: ' + email,
    })
      .then(_ => {
        Alert.alert('Сообщение', 'Ваше обращение успешно отправлено');
        setLoading(false);
        messageRef.current?.setNativeProps({
          text: '',
        });
        nameRef.current?.setNativeProps({
          text: '',
        });
        themeRef.current?.setNativeProps({
          text: '',
        });
        emailRef.current?.setNativeProps({
          text: '',
        });
        setMessage('');
        setEmail('');
        setTheme('');
        setName('');
      })
      .catch(_ => {
        Alert.alert('Ошибка', 'Повторите попытку позже');
        setLoading(false);
      });
  }

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
            onPress={() => onContinuePress()}
            loading={loading}
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
