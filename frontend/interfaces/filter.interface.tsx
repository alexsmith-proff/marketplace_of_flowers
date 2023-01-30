interface IBase {
  id: number;
  name: string;
}

export interface IFilter extends IBase {
    slug: string;
    elements: IFilterElement[]
    createdAt: Date;
    updatedAt: Date;
  }

export interface IFilterElement extends IBase {
  slug: string;
  values: IFilterValue[]
  createdAt: Date;
  updatedAt: Date;
}

export interface IFilterValue extends IBase {
    slug: string
    value: string
}