import { IBreadCrumbs } from '../../interfaces/breadCrumbs.interface';
import { ICatalog } from '../../interfaces/catalog.interface';
import { IFilter } from '../../interfaces/filter.interface';
import { IMenu, IMenuItem, ISubMenu } from '../../interfaces/menu.interface';
import { IElement, ISection } from '../../interfaces/section.interface'
import { isJSONString } from '../../util/helpers/main';

// Menus
export const getMenuItemBySlugFromMenu = (menu: IMenu, menuItemSlug: string): IMenuItem => {
    if (menu) {
        const menuItem = menu.items.find(item => item.slug === menuItemSlug)
        if (menuItem) return menuItem
        return null
    }
}

export const getMenuItemNameBySlugFromMenu = (menu: IMenu, menuItemSlug: string): string => {
    const menuItem = getMenuItemBySlugFromMenu(menu, menuItemSlug)
    if (menuItem) return menuItem.name
    return null
}

export const getSubMenuItemBySlugFromMenu = (menu: IMenu, menuItemSlug: string, subMenuItemSlug: string): ISubMenu => {
    const menuItem = getMenuItemBySlugFromMenu(menu, menuItemSlug)
    if (menuItem) {
        const subMenuItem = menuItem.submenuitems.find(subItem => subItem.slug === subMenuItemSlug)
        if (subMenuItem) return subMenuItem
    }
    return null
}

export const getSubMenuItemsArrBySlugFromMenu = (menu: IMenu, menuItemSlug: string): ISubMenu[] => {
    const menuItem = getMenuItemBySlugFromMenu(menu, menuItemSlug)
    if (menuItem) return menuItem.submenuitems
    return null
}
///////////////////////////////////////

// Sections, Elements, Blocks
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

export const getTextInTextBlockFromElement = (element: IElement, textSlug: string) => {
    const textElement = element.text_elements.find(t_el => t_el.slug == textSlug)
    // console.log('wwwww', textElement);

    if (textElement) {
        if (isJSONString(textElement.text)) {
            const JSONObj = JSON.parse(textElement.text)
            if (JSONObj.name == 'product') {
                return element.product_ref[JSONObj.field]
            } else return textElement.text
        } else return textElement.text
    }
    else return ''

}

export const getFileNameInImgBlockFromElement = (element: IElement, imgSlug: string) => {
    const imgElement = element.img_elements.find(img_el => img_el.slug == imgSlug)
    if (imgElement) return imgElement.filename
    else return ''

}

export const getElementBySlug = (section: ISection, slug: string): IElement => {
    return section.elements.find(el => el.slug == slug)
}
///////////////////////////////////////

export const getBreadCrumbsFromCatalog = (catalogArr: ICatalog[], slug: string) => {
    const breadCrumbs: IBreadCrumbs[] = []
    const findEl = (slug: string) => {
        const bc = catalogArr.find(item => item.slug === slug)
        if (bc) {
            breadCrumbs.unshift({
                text: bc.name,
                slug: bc.slug
            })
            if (bc.parent) {
                findEl(bc.parent.slug)
            } else {
                breadCrumbs.unshift({
                    text: 'Главная',
                    slug: ''
                })
            }
        }
    }
    findEl(slug)

    return breadCrumbs
}
///////////////////////////////////////

export const getFilterElementFromFilterBySlug = (filter: IFilter, slug: string) => filter?.elements.find(item => item.slug === slug)

