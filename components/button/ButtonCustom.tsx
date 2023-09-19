import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface ButtonProps {
  onPress?: any;
  text: string;
  icon: string;
  classNameText?: string;
  iconSize?: number;
  classNameBtn?: string;
}

export const ButtonCustom = (props: ButtonProps) => {
  const { onPress, text, icon, classNameText, iconSize, classNameBtn } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`flex flex-row items-center rounded-[8px] ${
          icon !== '' ? 'justify-between gap-x-[12px]' : 'justify-center'
        } p-[12px]  ${classNameBtn}`}>
        <Text className={classNameText}>{text}</Text>
        {icon !== '' && (
          <Icon
            name={icon as string}
            color={'#BC2449'}
            size={iconSize}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
