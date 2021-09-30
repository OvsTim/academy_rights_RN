import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainStackParamList} from '../../navigation/MainNavigator';
import {withFont} from '../_CustomComponents/HOC/withFont';
import FloatingButton from '../_CustomComponents/FloatingButton';
type Props = {
  navigation: DrawerNavigationProp<MainStackParamList, 'Home'>;
};
const StyledText = withFont(Text);

export default function HomeScreen({}: Props) {
  return (
    <View style={{flex: 1, backgroundColor: '#DFF7FF'}}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginHorizontal: 24,
          paddingBottom: 100,
        }}>
        <StyledText
          style={{
            fontWeight: '700',
            fontSize: 28,
            textAlign: 'center',
            marginVertical: 32,
          }}>
          Вас приветствует компания ООО "Академия Права"!
        </StyledText>
        <StyledText
          style={{
            fontSize: 18,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Главная цель юридической компании ООО "Академия Права" - защита прав
          физических и юридических лиц. Наши специалисты оказывают
          квалифицированную юридическую помощь в различных отраслях права.
        </StyledText>
        <StyledText
          style={{
            marginTop: 16,
            fontWeight: '500',
          }}>
          {
            'Деятельность компании основывается на следующих принципах: \n- обязательное заключение договора об оказании юридических услуг;\n- абсолютная прозрачность работы и полная осведомленность клиента о ходе работы;\n- право клиента в любое время отказаться от услуг и вернуть оплату;\n- своевременность оказания услуги в оговоренные договором сроки;\n\nПо любому делу Вы можете позвонить по телефону или обратиться в офис компании и получить бесплатную консультацию, возможные варианты решения и перспективы дела.'
          }
        </StyledText>
      </ScrollView>
      <FloatingButton />
    </View>
  );
}
