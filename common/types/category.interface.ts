interface IBase {
  id: string;
  key: React.Key;
}

interface ICategories extends IBase {
  category_name: string;
  label: string;
  image: string;
}

export type { ICategories, IBase };
