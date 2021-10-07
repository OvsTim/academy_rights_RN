import React, {Ref, useState} from 'react';
import {
  View,
  TextInput,
  ViewStyle,
  TextInputProps,
  TextProps,
  Text,
  useWindowDimensions,
} from 'react-native';
import {withFont} from './HOC/withFont';

type Props = {
  value: string;
  onTextChanges: (term: string) => void;
  styleInput: ViewStyle;
  styleContainer: ViewStyle;
  editable: boolean;
  placeholder: string;
  showLabel: boolean;
  label: string;
  inputProps: TextInputProps;
  labelStyle: TextProps;
  inputRef?: Ref<TextInput>;
};

export default function BaseInput(props: Props) {
  const [value, setValue] = useState<string>(props.value);
  const {width} = useWindowDimensions();
  function handleInput(input: string) {
    props.onTextChanges(input);
    setValue(input);
  }

  const StyledText = withFont(Text);
  function renderLabel() {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          top: -24,
          height: 16,
        }}>
        <StyledText
          style={[
            {
              fontFamily: 'Montserrat-Regular',
              color: 'black',
            },
            props.labelStyle,
          ]}>
          {props.label}
        </StyledText>
      </View>
    );
  }

  return (
    <View
      style={[
        {
          marginTop: 32,
          width: width - 64,
          minHeight: 44,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderColor: '#2862AC',
          borderWidth: 2,
          borderRadius: 8,
        },
        props.styleContainer,
      ]}>
      <TextInput
        ref={props.inputRef}
        style={[
          {
            width: '100%',
            paddingRight: 32,
            paddingLeft: 12,
            fontSize: 14,
            fontFamily: 'Montserrat-Regular',

            backgroundColor: 'transparent',
          },
          props.styleInput,
        ]}
        onChangeText={terms => {
          handleInput(terms);
        }}
        {...props.inputProps}
        value={value}
        placeholder={props.placeholder}
        underlineColorAndroid={'rgba(0,0,0,0)'}
      />
      {props.showLabel && renderLabel()}
    </View>
  );
}

BaseInput.defaultProps = {
  value: '',
  onTextChanges: () => {},
  styleInput: {}, //стиль для поля ввода текста
  styleContainer: {}, // стиль для контейнера, в котором находится поле ввода
  editable: true,
  placeholder: 'Текст',
  showLabel: true,
  label: 'Текст',
  inputProps: {},
  labelStyle: {},
};
