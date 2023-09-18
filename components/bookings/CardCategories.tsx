import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import ImageCategory from './ImageCategory';
type CardCategoriesProps = {
  image: string;
  category_name: string;
  service_count: number;
  onClick?: any;
};
const CardCategories = (props: CardCategoriesProps) => {
  const { image, category_name, service_count, onClick } = props;
  return (
    <TouchableOpacity onPress={onClick}>
      <View className='flex flex-row items-center justify-between p-[12px] w-[212px] h-[96px] bg-[#fff] rounded-[8px] border border-[#B9BDC1] gap-x-[12px]'>
        <ImageCategory image={image} />
        <View className='flex flex-cols items-center justify-start'>
          <Text className='text-[16px] font-[600] leading-[24px] tracking-[0.5px] text-[#36383A]'>
            {category_name}
          </Text>
          <Text className='text-[14px] font-[400] text-[#36383A] leading-[20px] tracking-[0.25px]'>
            {service_count} dịch vụ
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCategories;
