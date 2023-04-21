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



export interface IFilterPrice {
  valueMin: number
  valueMax: number
  limitMin: number,
  limitMax: number,
}

export interface IFilterActiveColor extends IFilterValue {
  index: number
}

export interface IShowFilterButton {
  isVisible: boolean
  top: number
}

export interface IFilterContext {
  price: IFilterPrice
  setFilterPrice: any
  color: IFilterElement
  // setFilterColor: any
  activeColor: IFilterActiveColor
  setFilterActiveColor: any
  diametrFlavor: IFilterElement
  setFilterDiametrFlavor: any
  heightFlavor: IFilterElement
  setFilterHeightFlavor: any
  composition: IFilterElement
  setFilterComposition: any
  purpose: IFilterElement
  setFilterPurpose: any
  clearBtn: boolean
  // setFilterShowBtn: any
  showBtn: IShowFilterButton,
  setShowBtn: any
}

export interface IFilterData {
  price: IFilterPrice
  activeColor: IFilterActiveColor  
  diametrFlavor: IFilterElement
  heightFlavor: IFilterElement
  composition: IFilterElement
  purpose: IFilterElement
}