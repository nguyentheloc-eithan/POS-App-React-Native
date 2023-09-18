import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import CardCategories from '../../components/bookings/CardCategories';

const BookingPage = () => {
  return (
    <SafeAreaView className='p-[24px] flex flex-row items-center'>
      <View className='flex flex-cols'>
        <View className='flex flex-row items-center justify-between rounded-t-[8px] mb-[4px] h-[84px] w-[1398px] pt-[24px] px-[24px] bg-[#fff]'>
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
        </View>
        <View className='rounded-b-[8px] h-[79vh] w-[1398px] pt-[24px] px-[24px] bg-[#fff]'>
          <Text>
            <CardCategories
              image={
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
              }
              category_name={'Mí'}
              service_count={76}
            />
          </Text>
        </View>
      </View>

      <View className='ml-[24px] rounded-[8px] h-full pt-[24px] w-[450px] px-[24px] bg-[#fff]'>
        <Text> BookingPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookingPage;
