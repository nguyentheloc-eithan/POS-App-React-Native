import React from 'react';
import { ScrollView, View } from 'react-native';
import { IService } from '../../../common/types/service.interface';
import CardService from '../CardService';
interface ListServiceProps {
  services: IService[];
}
const ListServices = ({ services }: ListServiceProps) => {
  return (
    <View>
      <ScrollView>
        <View className='flex flex-wrap flex-row gap-x-[12px] items-center justify-center '>
          {services.map((item) => {
            return (
              <View key={item.key}>
                <CardService service={item} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListServices;
