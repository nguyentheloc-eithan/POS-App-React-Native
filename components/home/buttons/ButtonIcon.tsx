import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';
interface ButtonIconProps {
  icon: string;
  onClick?: any;
}
const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, onClick } = props;
  return (
    <TouchableOpacity>
      <View className='h-[40px] mx-[8px] px-[8px] w-[40px] rounded-[36px] bg-[#fff] p-[8px] flex items-center justify-center'>
        <Icon
          name={icon}
          size={24}
          color={'#8F9499'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
