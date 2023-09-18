import React from 'react';
import { View, Text } from 'react-native';
import ButtonSearch from '../../components/bookings/ButtonSearch';

const HeaderBooking = () => {
  return (
    <View className='flex flex-row w-[1398px] items-center justify-between rounded-t-[8px] mb-[4px] h-[84px] pt-[24px] px-[24px] bg-[#fff]'>
      <Text className='text-[34px] font-[600] leading-[50px] tracking-[0.25px] text-[#36383A]'>
        Tạo booking mới
      </Text>
      <View className='flex flex-row gap-x-[24px]'>
        <Text className='text-[34px] font-[400] leading-[50px] tracking-[0.25px] text-[#36383A]'>
          Dịch Vụ
        </Text>
        <Text className='text-[34px] font-[400] leading-[50px] tracking-[0.25px] text-[#8F9499]'>
          Sản phẩm
        </Text>
      </View>
      <View>
        <ButtonSearch />
      </View>
    </View>
  );
};

export default HeaderBooking;
