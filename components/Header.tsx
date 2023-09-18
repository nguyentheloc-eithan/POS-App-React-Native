import React from 'react';
import { View, Text } from 'react-native';
import ButtonIcon from './home/buttons/ButtonIcon';
import AvatarUser from './home/avatar/Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
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
  );
};

export default Header;
