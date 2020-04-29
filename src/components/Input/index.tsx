import {Icon, Input as NativeBaseInput, Item} from "native-base";
import React from 'react';
import {NativeSyntheticEvent, StyleProp, TextInputKeyPressEventData, TextStyle} from 'react-native';

export interface InputProps {
  iconName: string,
  iconIos?: string,
  iconAndroid?: string,
  inputPlaceHolder?: string,
  inputValue: string,
  onChangeText?: ((text: string) => void) | undefined,
  onKeyPress?: ((e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void) | undefined,
  inputStyle?: StyleProp<TextStyle>,
  iconStyle ?: StyleProp<TextStyle>,

}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <Icon name={props.iconName} ios={props.iconIos} android={props.iconAndroid} style={props.iconStyle}/>
      <NativeBaseInput
        placeholder={props.inputPlaceHolder}
        value={props.inputValue}
        onChangeText={props.onChangeText}
        onKeyPress={props.onKeyPress}
        style={props.inputStyle}
      />
    </>
  )
}
