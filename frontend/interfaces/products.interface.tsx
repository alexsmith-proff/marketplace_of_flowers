import { ICatalog } from "./catalog.interface";

interface IBase {
  id: number;
  name: string;
}
export interface IBrand extends IBase{}

export interface IAdminProducts extends IBase {
  price: number;
  count_in_stock: number;
  vendor_code: string;
  brand: IBrand;
  catalog: ICatalog
  createdAt: Date;
  updatedAt: Date;
}
