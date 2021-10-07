import 'react-native-gesture-handler';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {RootState} from '../redux';
import HomeScreen from '../components/screens/HomeScreen';
import ServiceScreen from '../components/screens/ServiceScreen';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import ServiceTextScreen from '../components/screens/ServiceTextScreen';
import DocumentsOnlineScreen from '../components/screens/DocumentsOnlineScreen';
import TeamScreen from '../components/screens/TeamScreen';
import ContactsScreen from '../components/screens/ContactsScreen';
import FeedbackScreen from '../components/screens/FeedbackScreen';
import {withFont} from '../components/_CustomComponents/HOC/withFont';
export type MainStackParamList = {
  Home: undefined;
  Service: undefined;
  Contacts: undefined;
  DocumentsOnline: undefined;
  Feedback: {theme?: string};
  Filial: undefined;
  Links: undefined;
  News: undefined;
  Team: undefined;
  ServiceText: undefined;
};

const StyledText = withFont(Text);
export default function MainNavigator() {
  const token = useSelector((state: RootState) => state.data.token);
  console.log('token', token);
  const Drawer = createDrawerNavigator();
  const {width} = useWindowDimensions();
  function renderDrawerContent(props: DrawerContentComponentProps) {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            marginBottom: 32,
          }}>
          <StyledText
            style={{
              fontWeight: '500',
              marginVertical: 32,
              alignSelf: 'center',
              color: 'white',
              fontSize: 26,
            }}>
            ООО "Академия Права"
          </StyledText>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerType={'slide'}
      statusBarAnimation={'slide'}
      // detachInactiveScreens={true}
      // overlayColor={'transparent'}
      drawerContent={props => renderDrawerContent(props)}
      drawerContentOptions={{
        labelStyle: {
          color: 'white',
          textTransform: 'capitalize',
          fontFamily: 'Montserrat-Bold',
        },
        activeTintColor: '#DFF7FF',
      }}
      drawerStyle={{backgroundColor: '#2862AC', width: width - 50}}
      screenOptions={{
        headerPressColorAndroid: 'white',
        headerShown: true,
        headerStyle: {backgroundColor: '#2862AC'},
        headerTitleStyle: {color: 'white', fontFamily: 'Montserrat-Regular'},
        headerTintColor: 'white',

        headerRight: () => (
          <Image
            source={require('../assets/logo.webp')}
            style={{width: 24, height: 50, marginRight: 15}}
          />
        ),
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Главная',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_home_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          title: 'Услуги',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_list_alt_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ServiceText"
        component={ServiceTextScreen}
        options={{
          title: 'Юр. лицам',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_business_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="DocumentsOnline"
        component={DocumentsOnlineScreen}
        options={{
          title: 'Документы онлайн',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_document_scanner_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      {/*<Drawer.Screen*/}
      {/*  name="Filial"*/}
      {/*  component={FilialScreen}*/}
      {/*  options={{*/}
      {/*    title: 'Филиалы',*/}
      {/*    drawerIcon: props => (*/}
      {/*      <Image*/}
      {/*        source={require('../assets/outline_corporate_fare_black_36.png')}*/}
      {/*        style={{*/}
      {/*          width: props.size,*/}
      {/*          height: props.size,*/}
      {/*          tintColor: 'white',*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
      <Drawer.Screen
        name="Team"
        component={TeamScreen}
        options={{
          title: 'Наша команда',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_people_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          title: 'Контакты',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_contacts_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      {/*<Drawer.Screen*/}
      {/*  name="News"*/}
      {/*  component={NewsScreen}*/}
      {/*  options={{*/}
      {/*    title: 'Новости',*/}
      {/*    drawerIcon: props => (*/}
      {/*      <Image*/}
      {/*        source={require('../assets/outline_feed_black_36.png')}*/}
      {/*        style={{*/}
      {/*          width: props.size,*/}
      {/*          height: props.size,*/}
      {/*          tintColor: 'white',*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
      <Drawer.Screen
        name="Feedback"
        initialParams={{theme: undefined}}
        component={FeedbackScreen}
        options={{
          title: 'Написать нам',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_question_answer_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Links"
        component={DocumentsOnlineScreen}
        options={{
          title: 'Ссылки',
          drawerIcon: props => (
            <Image
              source={require('../assets/outline_public_black_36.png')}
              style={{
                width: props.size,
                height: props.size,
                tintColor: 'white',
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
