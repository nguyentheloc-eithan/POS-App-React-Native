import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, Image } from 'react-native';
import { View } from 'react-native';
import { Avatar } from 'antd';

interface ButtonIconProps {
  avatar?: string;
  onClick?: any;
}

const AvatarUser = (props: ButtonIconProps) => {
  const { avatar, onClick } = props;
  return (
    <SafeAreaView className='h-[40px] w-[40px] rounded-[36px] bg-[#fff]  flex items-center justify-center overflow-hidden'>
      <View className='overflow-hidden'>
        <Image
          style={{ width: 44, height: 44, objectFit: 'cover' }}
          source={{
            uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AvatarUser;
