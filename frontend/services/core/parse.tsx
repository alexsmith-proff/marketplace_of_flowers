import { IMenu, IMenuItem } from '../../interfaces/menu.interface';
import { IElement, ISection } from '../../interfaces/section.interface'

// Menus
export const getMenuItemBySlugFromMenu = (menu: IMenu, menuItemSlug: string): IMenuItem => {
    if(menu) {
        const menuItem = menu.items.find(item => item.slug === menuItemSlug)
        if(menuItem) return menuItem
        return null
    }
}
///////////////////////////////////////

// Sections? Blocks
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
    if (textElement) return textElement.text
    else return ''

}

export const getFileNameInImgBlockFromElement = (element: IElement, imgSlug: string) => {
    const imgElement = element.img_elements.find(img_el => img_el.slug == imgSlug)
    if (imgElement) return imgElement.filename
    else return ''

}
///////////////////////////////////////

