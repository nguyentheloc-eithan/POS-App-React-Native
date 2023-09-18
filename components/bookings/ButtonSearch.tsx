import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonSearch = () => {
  return (
    <TouchableOpacity>
      <View className='border border-[#B9BDC1] w-[46px] h-[46px] py-[11px] px-[12px] rounded-[8px] flex items-center justify-center'>
        <Icon
          name={'search'}
          size={20}
          color={'#36383A'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSearch;
