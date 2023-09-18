import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import useFetchCategories from '../../common/stores/category';
import { ICategories } from '../../common/types/category.interface';
import CardCategories from '../../components/bookings/CardCategories';
import CardService from '../../components/bookings/CardService';
import { ButtonCustom } from '../../components/button/ButtonCustom';
import { services } from '../../data/dumb-service-data';
import HeaderBooking from './HeaderBooking';
import SliderCategories from '../../components/bookings/categories/SliderCategories';
import ListServices from '../../components/bookings/services/ListServices';
import Header from '../../components/Header';

const BookingPage = () => {
  const { allCategories } = useFetchCategories();
  const [cardSelected, setCardSelected] = useState<any>(null);
  const [activeCard, setActiveCard] = useState<boolean>(false);
  const handleClickCard = (index: number) => {
    if (index == cardSelected) {
      setCardSelected(null);
      setActiveCard(false);
    } else if (index !== cardSelected) {
      setCardSelected(index);
      setActiveCard(true);
    }
  };
  return (
    <View>
      <Header />
      <View className='p-[24px] flex flex-row items-center justify-center'>
        <View className='flex flex-cols'>
          <HeaderBooking />
          <View className='rounded-b-[8px] h-[79vh] w-[1398px] pt-[24px] px-[24px] bg-[#fff] '>
            <SliderCategories
              allCategories={allCategories}
              handleClickCard={handleClickCard}
              cardSelected={cardSelected}
            />
            <ListServices services={services} />
          </View>
        </View>
        <View className='flex ml-[24px] rounded-[8px] w-[450px] h- full'>
          <View className='flex flex-row items-center justify-between rounded-t-[8px] mb-[4px] h-[84px] px-[24px] bg-[#fff]'>
            <ButtonCustom
              classNameText={
                'text-[16px] font-[400] leading-[24px] tracking-[0.5px]'
              }
              classNameBtn={'border border-[#BC2449] rounded-[8px]'}
              text={'Đơn mới'}
              icon={'plus'}
              iconSize={24}
            />
          </View>
          <View className='rounded-b-[8px] h-[79vh] w-[450px] pt-[24px] px-[44px] bg-[#fff]  flex flex-cols items-center justify-center'>
            <View className='h-auto flex items-center justify-center '>
              <Text className='w-[362px] mb-[24px] text-[36px] font-[600] leading-[50px] tracking-[0.25px] text-center'>
                Chưa booking mới. Tạo mới ngay.
              </Text>
              <ButtonCustom
                classNameText={
                  'text-[16px] font-[400]  tracking-[0.5px]  text-[#fff]'
                }
                classNameBtn={'bg-[#BC2449] rounded-[8px]'}
                text={'Tạo booking'}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingPage;
