import { ICatalog } from "./catalog.interface";
import { IFilterValue } from "./filter.interface";

interface IBase {
  id: number;
  name: string;
}
export interface IBrand extends IBase{}

export interface IAdminProduct extends IBase {
  price: number;
  count_in_stock: number;
  vendor_code: string;
  brand: IBrand;
  catalog: ICatalog
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateProductInput {
  name: string,
  slug: string,
  price: number,
  vendor_code: string,
  count_in_stock: number,
  brand_id: number,
  catalog_id: number,
  images: IPreviewProductImage[],
  filters: IProductFilterRowTable[]
}

export interface IUpdateProductInput {
  id: number,
  name: string,
  vendor_code: string,
  price: number,
  count_in_stock: number,
}

export interface IUpdateProductRelationsInput {
  id: number,
  brand_id: number,
  catalog_id: number,
}

export interface IPreviewProductImage {
  fileFromTarget: any,
  file : string,
  isMainPhoto?: boolean
}

export interface IProductFilter extends IBase {
  slug: string,
  values: IFilterValue,
}

export interface IProductFilterRowTable {
  filterElementName: string,
  filterValueName: string,
  activeIndexFilterElement: number,
  isDisabledCheckBox: boolean,
  isActiveCreateBtn: boolean,
  isActiveEditBtn: boolean,
  isActiveDeleteBtn: boolean,
  hover: boolean,
}

export interface IProductMinMaxPrice {
  minPrice: number,
  maxPrice: number
}