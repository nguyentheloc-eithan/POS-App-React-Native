import { create } from 'zustand';
import { IService } from '../types/service.interface';

type State = {
  allService: IService[];
};

type Action = {
  setAllServices: (_service: State['allService']) => void;
};

const useServiceStore = create<State & Action>((set) => ({
  allService: [],
  setAllServices: (_service) => set(() => ({ allService: _service })),
}));

function useFetchServices() {
  let allService = useServiceStore((state) => state.allService);
  let setAllServices = useServiceStore((state) => state.setAllServices);
  return { allService, setAllServices };
}

export default useFetchServices;
