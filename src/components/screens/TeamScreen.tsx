import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import {withFont} from '../_CustomComponents/HOC/withFont';
import {FloatingAction} from 'react-native-floating-action';
import DropShadow from 'react-native-drop-shadow';
import FloatingButton from '../_CustomComponents/FloatingButton';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Team'>;
};

const StyledText = withFont(Text);
export default function TeamScreen({}: Props) {
  const {width} = useWindowDimensions();

  const renderCard = (
    image: ImageSourcePropType,
    name: string,
    prof: string,
  ) => {
    return (
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2.5,
          width: width / 2 - 16,
          marginVertical: 16,
          marginHorizontal: 8,
        }}>
        <View
          style={{
            width: width / 2 - 16,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Image
            resizeMode={'cover'}
            style={{width: width / 2 - 32, marginTop: 8, borderRadius: 8}}
            source={image}
          />
          <StyledText
            style={{
              color: '#143463',
              fontWeight:'600',
              textAlign: 'center',
              marginTop: 8,
              fontSize: 15,
            }}>
            {name}
          </StyledText>
          <StyledText
            style={{
              color: 'black',
              fontWeight: '500',
              textAlign: 'center',
              margin: 8,
            }}>
            {prof}
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
        <View style={{flexDirection: 'row'}}>
          {renderCard(
            require('../../assets/team_1.webp'),
            'Мокрых Антон Константинович',
            'генеральный директор. \nСпециалист по гражданским и административным делам',
          )}
          {renderCard(
            require('../../assets/team_2.webp'),
            'Смирнова Мария Романовна',
            'старший юрист по гражданским делам',
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          {renderCard(
            require('../../assets/team_3.webp'),
            'Андрейченко Светлана Александровна',
            'юрист по арбитражным спорам',
          )}
          {renderCard(
            require('../../assets/team_4.webp'),
            'Золотов Артем Евгеньевич',
            'специалист по банкротству',
          )}
        </View>
      </ScrollView>
      <FloatingButton />
    </View>
  );
}
