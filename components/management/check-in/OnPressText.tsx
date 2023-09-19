import React, { ReactNode, useState } from 'react';
import { Pressable, Text, TextProps } from 'react-native';

type OnPressTextProps = {
  text: string;
  onPress?: any;
  color?: string;
  activeColor?: string;
  classNameText?: string;
};

interface Props extends TextProps {
  children: ReactNode;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  onPress?: any;
}

const OnPressText = ({ children, onPress, setActive, ...props }: Props) => {
  const onHandlePress = () => {
    setActive((prev) => !prev);
    // console.log(active);
  };

  return (
    <Pressable onPress={onHandlePress}>
      <Text {...props}>{children}</Text>
    </Pressable>
  );
};

export default OnPressText;
