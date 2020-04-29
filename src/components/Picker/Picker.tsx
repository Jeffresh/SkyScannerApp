import {Icon, Picker as NativeBasePicker} from "native-base";
import React from 'react';

export type ItemPicker = {
  label: string
  value: string
}

interface PickerProps {
  iconName: string,
  pickerPlaceHolder: string,
  mode?: "dialog" | "dropdown";
  selectedValue?: any,
  onValueChange?:  ((itemValue: any, itemPosition: number) => void) | undefined
  items: ItemPicker[]
}

export const Picker : React.FC<PickerProps>  = (props) => {

  return (
    <>
      <Icon name={props.iconName}/>
      <NativeBasePicker
        placeholder={props.pickerPlaceHolder}
        mode={props.mode}
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
      >
        <NativeBasePicker.Item label={props.pickerPlaceHolder} value='0'/>
        {props.items.map(item =>{
          return (
            <NativeBasePicker.Item label={item.label} value={item.value}/>
          )
        })}
      </NativeBasePicker>
    </>
  )
}
