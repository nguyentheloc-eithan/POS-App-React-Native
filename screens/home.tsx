import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import ButtonIcon from '../components/home/buttons/ButtonIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarUser from '../components/home/avatar/Avatar';
import { ButtonHomeOption } from '../components/home/buttons/ButtonHomeOption';

export default function HomePage({ navigation }: any) {
  return (
    <SafeAreaView>
      <View className='w-full h-auto flex flex-row items-center justify-between bg-[#BC2449] px-[24px] py-[28px]'>
        <Text className='text-[34px] font-[600] text-[#fff] leading-[50px] tracking-[0.25px]'>
          Aura Lễ Tân
        </Text>
        <View className='flex w-auto flex-row items-center justify-around'>
          <ButtonIcon icon={'home'} />
          <ButtonIcon icon={'info-circle'} />
          <ButtonIcon icon={'bell'} />
          <View className='flex flex-row items-center justify-center ml-[20px]'>
            <AvatarUser />
            <View>
              <Text className='ml-[8px] text-[14px] text-[#fff] leading-[20px] tracking-[0.25px] font-[400]'>
                Nguyen The Loc
              </Text>
              <Text className='ml-[8px] text-[14px] text-[#fff] leading-[20px] tracking-[0.25px] font-[400]'>
                LỄ TÂN
              </Text>
            </View>
            <Icon
              style={{ marginLeft: 100 }}
              name={'angle-down'}
              size={24}
              color={'#fff'}
            />
          </View>
        </View>
      </View>
      {/* <View className='mt-[156px] px-[48px] flex flex-cols w-full'> */}
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
      {/* </View> */}
    </SafeAreaView>
  );
}
