export interface ICatalogBase {
    id: number;
    name: string;
  }
  export interface ICatalog extends ICatalogBase {
    serial_number: number;
    link: string;
    children: ICatalog[];
  }
  