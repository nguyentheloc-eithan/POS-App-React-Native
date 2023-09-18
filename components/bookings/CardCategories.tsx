import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CapitalizeFirstOfWord } from '../../utils/uppercase-first';
import ImageCategory from './ImageCategory';
type CardCategoriesProps = {
  image: string;
  category_name: string;
  service_count: number;
  onClick?: any;
  active?: boolean;
};
const CardCategories = (props: CardCategoriesProps) => {
  const { image, category_name, service_count, onClick, active } = props;

  return (
    <View
      className={`flex flex-row items-center justify-between p-[12px] w-[212px] h-[96px] rounded-[8px] ${
        active
          ? 'bg-[#FCEEF2] border border-[#BC2449]'
          : 'bg-[#fff] border border-[#B9BDC1]'
      }  gap-x-[12px]`}>
      <ImageCategory image={image} />
      <View className='flex flex-wrap flex-cols items-center justify-center w-[120px]'>
        <Text className='text-[16px]  font-[600] items-center justify-center leading-[24px] tracking-[0.5px] text-[#36383A]'>
          {CapitalizeFirstOfWord(category_name)}
        </Text>
        <Text className='text-[14px] font-[400] text-[#36383A] leading-[20px] tracking-[0.25px]'>
          {service_count} dịch vụ
        </Text>
      </View>
    </View>
  );
};

export default CardCategories;
