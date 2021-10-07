import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
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
            fontWeight: '500',
            marginVertical: 32,
          }}>
          {
            ' - комплексное абонентское обслуживание организаций, индивидуальных предпринимателей, а также иных хозяйственных субъектов. К комплексному обслуживанию относится весь перечень услуг для юридических лиц, предоставляемых компаний. Отдельные позиции, в рамках которых будет работать специалист, прописываются в договоре;\n\n - юридические консультации для юридических лиц по любым вопросам, связанным с обслуживанием организаций;\n\n - процедура регистрации юридического лица или индивидуального предпринимателя. К данной услуге относится сбор необходимой документации, оформление и подача заявления в налоговую инспекцию, подбор подходящего налогового режима для будущего предпринимателя;\n\n - предоставление юридических услуг юридическим лицам требуется в случае любых операций с организацией: слияние, реорганизация, расширение. В данном случае специалист подготовит всю необходимую документацию, исправит учредительные документы, будет представлять интересы компании в государственных инстанциях;\n\n - юридическая помощь юридическим лицам в Москве при ликвидации фирмы. Представленная услуга отличается сложностью и большим количеством правовых нюансов – помощь правозащитника позволит избежать задолженностей фондам и государственным учреждениям;\n\n - внесение исправлений в учредительные документы компании, а также их последующая регистрация в соответствующих инстанциях;\n\n - контроль проверок со стороны государственных органов, обжалование результатов;\n\n - ведение крупных проектов и партнеров. Услуги юриста для юридических лиц в Москве предоставляются в рамках контроля документации, оценки рисков, написания всех договоров, а также представительства при взаимодействии с третьими лицами;\n\n - разрешение договорных споров, которые могут возникнуть с клиентами и партнерами компании;\n\n - взыскание дебиторской задолженности, неустоек, компенсаций и штрафов;\n\n - ведение процедуры банкротства для организаций и индивидуальных предпринимателей при юридической помощи юридическим лицам;\n\n - ведение судебных споров в Арбитражных судах во всех инстанциях.'
          }
        </StyledText>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <Button
          onPress={() => {
            navigation.jumpTo('Feedback', {
              theme: 'Являюсь юридическим лицом',
            });
          }}
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
            Написать нам
          </StyledText>
        </Button>
        <View style={{height: 32}} />
      </View>
    </View>
  );
}
