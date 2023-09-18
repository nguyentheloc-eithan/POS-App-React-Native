import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
type ButtonHomeOptionProps = {
  label: string;
  icon: string;
  onClick?: any;
};

export const ButtonHomeOption = ({
  label,
  icon,
  onClick,
}: ButtonHomeOptionProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View className='relative w-[481px] mx-[48px] h-[581px] flex items-center justify-center'>
        <View className='absolute top-[90px] z-[50] h-[160px] w-[160px] rounded-[240px] bg-[#BC2449] p-[40px] flex items-center justify-center overflow-hidden'>
          <Image
            style={{
              width: 80,
              height: 80,
              objectFit: 'cover',
            }}
            source={{
              uri: `${icon}`,
            }}
          />
        </View>
        <View className='bg-[#fff] w-full h-[232px] rounded-[16px] flex items-center justify-center'>
          <Text className='text-[48px] font-[600] leading-[72px] text-[#36383A]'>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
