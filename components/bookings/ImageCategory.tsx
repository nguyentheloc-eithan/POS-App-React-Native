import React from 'react';
import { View, Image } from 'react-native';

type ImageCategoryProps = {
  image: string;
};

const ImageCategory = ({ image }: ImageCategoryProps) => {
  return (
    <View className='h-[56px] w-[56px] rounded-[36px] bg-[#fff]  flex items-center justify-center overflow-hidden'>
      <View className='overflow-hidden'>
        <Image
          style={{ width: 56, height: 56, objectFit: 'cover' }}
          source={{
            uri: `${image}`,
          }}
        />
      </View>
    </View>
  );
};

export default ImageCategory;
