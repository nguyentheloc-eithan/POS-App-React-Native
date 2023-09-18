import React from 'react';
import { View, Image, Text } from 'react-native';
import { IService } from '../../common/types/service.interface';
import Icon from 'react-native-vector-icons/FontAwesome';
interface CardServiceProps {
  service: IService;
}
const CardService = ({ service }: CardServiceProps) => {
  return (
    <View className='p-[12px] w-[320px] my-[12px] h-[288px] flex flex-cols rounded-[8px] border border-[#B9BDC1]'>
      <Image
        style={{ width: 295, height: 150, objectFit: 'cover' }}
        source={{
          uri: `${service.image}`,
        }}
      />
      <View className='flex flex-cols items-center justify-between '>
        <Text className='text-[20px] font-[700] leading-[30px] tracking-[0.15px] mt-[8px] text-[#36383A]'>
          {service.service_name}
        </Text>
        <View className='w-full flex flex-row items-center justify-between mt-[48px]'>
          <Text className='text-[20px] font-[700] leading-[30px] tracking-[0.15px] text-[#BC2449]'>
            {service.service_price}
          </Text>
          <Icon
            name='shopping-basket'
            color={'#BC2449'}
            size={24}
          />
        </View>
      </View>
    </View>
  );
};

export default CardService;
