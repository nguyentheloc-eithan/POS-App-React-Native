import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { ICategories } from '../../../common/types/category.interface';
import CardCategories from '../CardCategories';
interface SliderCateGoriesProps {
  allCategories: ICategories[];
  handleClickCard: (e: number) => void;
  cardSelected: number;
}
const SliderCategories = ({
  allCategories,
  handleClickCard,
  cardSelected,
}: SliderCateGoriesProps) => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        className='gap-x-[24px] py-[24px] px-[24px] flex flex-row'>
        {allCategories &&
          allCategories.map((category: ICategories, index: number) => {
            return (
              <Pressable
                key={category.key}
                onPress={() => {
                  handleClickCard(index);
                }}>
                <View>
                  <CardCategories
                    image={category.image}
                    category_name={category.category_name}
                    service_count={76}
                    active={index === cardSelected ? true : false}
                  />
                </View>
              </Pressable>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default SliderCategories;
