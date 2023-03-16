import authEndPoints from "./endpoints/auth.endpoints";
import catalogEndPoints from "./endpoints/catalog.endpoints";
import menuEndPoints from "./endpoints/menu.endpoints";
import productEndPoints from "./endpoints/product.endpoints";
import sectionEndPoints from "./endpoints/section.endpoints";

const allEndPoints = {
    auth: authEndPoints,
    menu: menuEndPoints,
    catalog: catalogEndPoints,
    section: sectionEndPoints,
    product: productEndPoints
}

export default allEndPoints