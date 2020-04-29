import React, {useState} from 'react'
import {Input, InputProps} from '~Components/Input'
import {FixedList} from '~Components/FixedList';
import styles from '~Components/SearchComponent/style';
import {Item} from "native-base";
import {GestureResponderEvent, NativeSyntheticEvent} from 'react-native';

interface AutoCompleteInputProps {
  listValues: any
  onItemPress?:(event: GestureResponderEvent) => void;

}

export const AutoCompleteInput: React.FC<AutoCompleteInputProps & InputProps> = (props) => {

  return (
    <>
      <Item>
      <Input
        inputPlaceHolder={props.inputPlaceHolder}
        iconName={props.iconName}
        iconIos={props.iconIos}
        iconAndroid={props.iconAndroid}
        inputValue={props.inputValue}
        onChangeText={props.onChangeText}
        onKeyPress={props.onKeyPress}
        inputStyle={props.inputStyle}
      />
      </Item>
      {props.listValues &&
      (<FixedList places={props.listValues} containerStyle={{top: 50}} onItemPress={props.onItemPress} /> )}
    </>
  )
}
