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
  createdAt: Date;
  updatedAt: Date;
}
