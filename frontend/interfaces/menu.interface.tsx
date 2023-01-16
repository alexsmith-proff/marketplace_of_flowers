export interface IMenuBase {
  id: number;
  name: string;
}
export interface IMenu extends IMenuBase {
  items: IMenuItem[]
}
export interface IMenuItem extends IMenuBase {
  serial_number: number;
  slug: string;
  link: string;
  submenuitems: ISubMenu[];
}
export interface ISubMenu extends IMenuBase {
  serial_number: number;
  slug: string;
  link: string;
}
