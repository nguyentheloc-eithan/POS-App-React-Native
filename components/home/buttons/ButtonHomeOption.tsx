import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
type ButtonHomeOptionProps = {
  label: string;
  icon: string;
  onClick?: any;
  active?: boolean;
};

export const ButtonHomeOption = ({
  label,
  icon,
  onClick,
  active,
}: ButtonHomeOptionProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className='h-fit'>
      <View className='relative w-full mx-[24px] h-[300px] flex items-center justify-center'>
        <View
          className={`absolute top-[95px] z-[50] h-[120px] w-[120px] rounded-[150px] ${
            active ? 'bg-[#fff]' : 'bg-[#BC2449]'
          }   px-[48px] flex items-center justify-center overflow-hidden`}>
          <Image
            style={{
              width: 70,
              height: 70,
              objectFit: 'cover',
            }}
            source={{
              uri: `${icon}`,
            }}
          />
        </View>
        <View
          className={`${
            active ? 'bg-[#BC2449]' : 'bg-[#fff]'
          }  w-[300px] h-[132px] rounded-[16px] flex items-center justify-center top-[100px]`}>
          <Text
            className={`text-[36px] font-[600] leading-[72px] ${
              active ? 'text-[#fff]' : 'text-[#36383A]'
            }`}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
