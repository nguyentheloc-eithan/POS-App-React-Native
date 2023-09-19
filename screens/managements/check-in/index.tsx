import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import Header from '../../../components/Header';
import { ButtonCustom } from '../../../components/button/ButtonCustom';
import HeaderCheckIn from '../../../components/management/check-in/HeaderCheckIn';
import dayjs from 'dayjs';

const CheckIn = () => {
  const now = dayjs().format('DD/MM/YYYY');
  return (
    <View className='w-full'>
      <Header />
      <View className='p-[24px] flex flex-row'>
        <View className='bg-[#fff] w-[450px] h-[666px] rounded-[8px] p-[24px]'>
          <View className='flex flex-row'>
            <View className='w-[189px]'>
              <Text className='w-[89px] text-[#BC2449] text-[24px] font-[600] leading-[36px] mt-[12px]'>
                Quản lý đặt hẹn
              </Text>
              <Text className='w-[150px] mt-[18px] text-[#36383A] text-[16px] font-[400] leading-[24px] tracking-[0.5px]'>
                Hôm nay, bạn có <Text className='font-[700]'>20</Text> lịch hẹn
              </Text>
            </View>
            <View className='w-[271px]'>
              <Image
                style={{ width: 221, height: 150, objectFit: 'contain' }}
                source={{
                  uri: 'https://ucarecdn.com/4c94a718-bef6-4f20-9f2d-9f26faf3f34d/-/format/auto/-/quality/smart/',
                }}
              />
            </View>
          </View>
          <View className='flex flex-row justify-between mt-[16px]'>
            <ButtonCustom
              classNameBtn={'border border-[#BC2449] w-[189px]'}
              classNameText={
                'text-[#BC2449] text-[14px] font-[500] leading-[20px] tracking-[1.25px]'
              }
              text={'Đặt tái khám'}
              icon={''}
            />
            <ButtonCustom
              classNameBtn={'bg-[#BC2449] w-[189px]'}
              classNameText={
                'text-[#fff] text-[14px] font-[500] leading-[20px] tracking-[1.25px]'
              }
              text={'Đặt hẹn mới'}
              icon={''}
            />
          </View>
        </View>
        <View className='flex flex-cols ml-[24px]'>
          <HeaderCheckIn
            date={now}
            filter_day={''}
            view_option={''}
          />
          <View className='bg-[#fff] w-[1398px] h-[70vh] rounded-b-[8px]'></View>
        </View>
      </View>
    </View>
  );
};

export default CheckIn;
