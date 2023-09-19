import React, { useState } from 'react';
import { View, Text } from 'react-native';
import OnPressText from './OnPressText';
import { cn } from '../../../utils';

type HeaderCheckInProps = {
  date: string;
  filter_day: string;
  view_option: string;
};
const optionsFilter = [
  {
    label: 'Tất cả',
    value: 'all',
  },
  {
    label: 'Sáng',
    value: 'morning',
  },
  {
    label: 'Tất cả',
    value: 'all',
  },
];

const HeaderCheckIn = ({
  date,
  filter_day,
  view_option,
}: HeaderCheckInProps) => {
  const [activeText, setActiveText] = useState<boolean>(false);
  return (
    <View className='bg-[#fff] w-[1398px] h-[60px] rounded-[8px] mb-[6px] pt-[12px] px-[24px]'>
      <View className='flex flex-row justify-between items-center'>
        <Text className='text-[34px] text-[#36383A] font-[600] leading-[50px] tracking-[0.25px]'>
          Lịch hẹn <Text>{date}</Text>
        </Text>
        <View className='flex flex-row'>
          <OnPressText
            setActive={setActiveText}
            className={cn('text-[#36383A]', {
              '!text-[#8F9499]': activeText,
            })}>
            Tất cả
          </OnPressText>
        </View>
      </View>
    </View>
  );
};

export default HeaderCheckIn;
