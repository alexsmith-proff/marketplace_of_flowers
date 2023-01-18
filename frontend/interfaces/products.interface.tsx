import { ICatalog } from "./catalog.interface";

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
  price: number,
  vendor_code: string,
  count_in_stock: number,
  brand_id: number,
  catalog_id: number,
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
  file : string,
  isMainPhoto: boolean
}