export interface IMenuBase {
  id: number;
  name: string;
}
export interface IMenu extends IMenuBase {}
export interface IMenuItem extends IMenuBase {
  serial_number: number;
  link: string;
  submenuitems: ISubMenu[];
}
export interface ISubMenu extends IMenuBase {
  serial_number: number;
  link: string;
}
