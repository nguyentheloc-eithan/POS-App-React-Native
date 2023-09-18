import React from 'react';
import { ScrollView, View } from 'react-native';
import { IService } from '../../common/types/service.interface';
import CardService from './CardService';
interface ServiceSectionProps {
  service_list: IService[];
}
const ServiceSection = ({ service_list }: ServiceSectionProps) => {
  return (
    <ScrollView>
      {service_list &&
        service_list.map((item: IService, index: number) => {
          return (
            <View key={index}>
              <CardService service={item} />
            </View>
          );
        })}
    </ScrollView>
  );
};

export default ServiceSection;
