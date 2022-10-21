export interface IMenuBase {
    id: number;
    name: string;
}
export interface IMenu extends IMenuBase { }
export interface IMenuItem extends IMenuBase {
    link: string;
}