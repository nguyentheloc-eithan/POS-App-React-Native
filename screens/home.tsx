import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from '../components/Header';
import { ButtonHomeOption } from '../components/home/buttons/ButtonHomeOption';

export default function HomePage({ navigation }: any) {
  return (
    <SafeAreaView>
      <Header />
      <View className=' flex flex-row  w-full mt-[50px] px-[48px] items-center justify-center'>
        <ButtonHomeOption
          label={'Booking'}
          icon={
            'https://ucarecdn.com/97bbd4c9-1e44-4ae1-a6b7-83c1c8089018/-/scale_crop/300x300/-/format/auto/-/quality/smart/'
          }
          onClick={() => navigation.navigate('Bookings')}
        />
        <ButtonHomeOption
          label={'Quản lý'}
          icon={
            'https://ucarecdn.com/3888da38-5287-4fc4-93dd-39dd502db3d1/-/scale_crop/300x300/-/format/auto/-/quality/smart/'
          }
        />
        <ButtonHomeOption
          label={'Danh sách'}
          icon={
            'https://ucarecdn.com/da6cf594-964e-4ce2-9913-323bcaca714c/-/scale_crop/300x300/-/format/auto/-/quality/smart/'
          }
        />
      </View>
    </SafeAreaView>
  );
}
