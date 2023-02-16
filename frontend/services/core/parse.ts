import { IMenu, IMenuItem, ISubMenu } from '../../interfaces/menu.interface';
import { IElement, ISection } from '../../interfaces/section.interface'
import allEndPoints from '../api/api';
import { isJSONString } from './util';

// Menus
export const getMenuItemBySlugFromMenu = (menu: IMenu, menuItemSlug: string): IMenuItem => {
    if(menu) {
        const menuItem = menu.items.find(item => item.slug === menuItemSlug)
        if(menuItem) return menuItem
        return null
    }
}

export const getMenuItemNameBySlugFromMenu = (menu: IMenu, menuItemSlug: string): string => {
    const menuItem = getMenuItemBySlugFromMenu(menu, menuItemSlug)
    if(menuItem) return menuItem.name
    return null
}

export const getSubMenuItemBySlugFromMenu = (menu: IMenu, menuItemSlug: string, subMenuItemSlug: string): ISubMenu => {
    const menuItem = getMenuItemBySlugFromMenu(menu, menuItemSlug)
    if(menuItem) {
        const subMenuItem = menuItem.submenuitems.find(subItem => subItem.slug === subMenuItemSlug)
        if(subMenuItem) return subMenuItem
    }
        return null
}

export const getSubMenuItemsArrBySlugFromMenu = (menu: IMenu, menuItemSlug: string): ISubMenu[] => {
    const menuItem = getMenuItemBySlugFromMenu(menu, menuItemSlug)
    if(menuItem) return menuItem.submenuitems
    return null
}
///////////////////////////////////////

// Sections, Blocks
export const getTextInTextBlockFromSection = (section: ISection, elementSlug: string, textSlug: string) => {
    if (section) {
        const element = section.elements.find(el => el.slug === elementSlug)
        if (element) {
            const textElement = element.text_elements.find(t_el => t_el.slug === textSlug)
            if (textElement) return textElement.text
        }
    }
    return ''
}

export const getTextInTextBlockFromElement = async(element: IElement, textSlug: string) => {
    const textElement = element.text_elements.find(t_el => t_el.slug == textSlug)
    if (textElement){
        if(isJSONString(textElement.text)){
            console.log('1111');
            const JSONObj = JSON.parse(textElement.text)
            if(JSONObj.name == 'product'){
                console.log('2222');
                let dataQuery = null
                try {
                    dataQuery = allEndPoints.product.getById(JSONObj.id)                   
                } catch (error) {
                    console.log('error', error);
                }
                console.log('dataQueryyyyyyy', dataQuery);
            }

        }else return textElement.text        
    }
    else return ''

}

export const getFileNameInImgBlockFromElement = (element: IElement, imgSlug: string) => {
    const imgElement = element.img_elements.find(img_el => img_el.slug == imgSlug)
    if (imgElement) return imgElement.filename
    else return ''

}
///////////////////////////////////////

