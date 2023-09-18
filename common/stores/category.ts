import { create } from 'zustand';
import { ICategories } from '../types/category.interface';

type State = {
  allCategories: ICategories[];
};

type Action = {
  setAllCategories: (_category: State['allCategories']) => void;
};

const useCategoriesStore = create<State & Action>((set) => ({
  allCategories: [],
  setAllCategories: (_category) => set(() => ({ allCategories: _category })),
}));

function useFetchCategories() {
  let allCategories = useCategoriesStore((state) => state.allCategories);
  let setAllCategories = useCategoriesStore((state) => state.setAllCategories);
  return { allCategories, setAllCategories };
}

export default useFetchCategories;
