import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';

type ImageCategoryProps = {
  image: string;
};
// const blurhash =
//   '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const blurhash = 'LIL:.j6301_401_3D%vzFdD%IASz';
const ImageCategory = ({ image }: ImageCategoryProps) => {
  return (
    <View className='h-[56px] w-[56px] rounded-[36px] bg-[#fff]  flex items-center justify-center overflow-hidden'>
      <View className='overflow-hidden'>
        {/* <FastImage
          style={{ width: 56, height: 56 }}
          source={{
            uri: `${image}`,
            priority: FastImage.priority.high,
          }}
        /> */}
        <Image
          style={{ width: 56, height: 56 }}
          source={`${image}`}
          placeholder={blurhash}
          contentFit='cover'
          transition={1000}
        />
      </View>
    </View>
  );
};

export default ImageCategory;
