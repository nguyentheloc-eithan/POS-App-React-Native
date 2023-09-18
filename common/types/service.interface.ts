import { IBase } from './category.interface';

interface IService extends IBase {
  service_name: string;
  service_price: number;
  description: string;
  image: string;
  categories: string;
  label: string;
}
export type { IService };
