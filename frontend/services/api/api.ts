import authEndPoints from "./endpoints/auth.endpoints";
import menuEndPoints from "./endpoints/menu.endpoints";
import productEndPoints from "./endpoints/product.endpoints";
import sectionEndPoints from "./endpoints/section.endpoints";

const allEndPoints = {
    auth: authEndPoints,
    menu: menuEndPoints,
    section: sectionEndPoints,
    product: productEndPoints
}

export default allEndPoints