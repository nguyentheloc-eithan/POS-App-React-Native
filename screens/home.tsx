import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Header from '../components/Header';
import { ButtonHomeOption } from '../components/home/buttons/ButtonHomeOption';
import { ButtonCustom } from '../components/button/ButtonCustom';

export default function HomePage({ navigation }: any) {
  const [activeBookingManager, setActiveBookingManager] =
    useState<boolean>(false);
  const navigateHome = () => {
    navigation.navigate('Home');
  };
  const [activeManager, setActiveManager] = useState<boolean>(false);
  return (
    <View className='h-full'>
      <Header />
      <View className=' flex flex-row w-full mt-[50px] items-center justify-center'>
        <ButtonHomeOption
          label={'Booking'}
          icon={
            'https://ucarecdn.com/97bbd4c9-1e44-4ae1-a6b7-83c1c8089018/-/scale_crop/300x300/-/format/auto/-/quality/smart/'
          }
          onClick={() => navigation.navigate('Bookings')}
        />

        <ButtonHomeOption
          active={activeBookingManager}
          label={'Quản lý'}
          icon={
            'https://ucarecdn.com/3888da38-5287-4fc4-93dd-39dd502db3d1/-/scale_crop/300x300/-/format/auto/-/quality/smart/'
          }
          onClick={() => {
            setActiveManager((prev) => !prev);
            setActiveBookingManager((prev) => !prev);
          }}
        />

        <ButtonHomeOption
          label={'Danh sách'}
          icon={
            'https://ucarecdn.com/da6cf594-964e-4ce2-9913-323bcaca714c/-/scale_crop/300x300/-/format/auto/-/quality/smart/'
          }
        />
      </View>
      {activeManager == true ? (
        <View className='px-[48px] flex ml-[50px] flex-start items-center justify-center gap-y-[122px] mt-[30px]'>
          <ButtonCustom
            text={'Check-in đặt hẹn'}
            onPress={() => {
              navigation.navigate('Check-in'), setActiveManager(false);
            }}
            classNameBtn='bg-[#fff]  w-[300px]'
            classNameText='text-[24px] text-center font-[600] leading-[50px] tracking-[0.25px] text-[#36383A]'
            icon={''}
          />
          <ButtonCustom
            icon={''}
            text={'Quản lý tour'}
            classNameBtn='bg-[#fff]  my-[12px] w-[300px]'
            classNameText='text-[24px] font-[600] leading-[50px] tracking-[0.25px] text-[#36383A]'
          />
          <ButtonCustom
            icon={''}
            text={'Quản lý đơn hàng'}
            classNameBtn='bg-[#fff] w-[300px]'
            classNameText='text-[24px] font-[600] leading-[50px] tracking-[0.25px] text-[#36383A]'
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
