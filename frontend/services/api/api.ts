import authEndPoints from "./endpoints/auth.endpoints";
import catalogEndPoints from "./endpoints/catalog.endpoints";
import filterEndPoints from "./endpoints/filter.endpoints";
import menuEndPoints from "./endpoints/menu.endpoints";
import orderEndPoints from "./endpoints/order.endpoints";
import productEndPoints from "./endpoints/product.endpoints";
import sectionEndPoints from "./endpoints/section.endpoints";

const allEndPoints = {
    auth: authEndPoints,
    order: orderEndPoints,
    menu: menuEndPoints,
    catalog: catalogEndPoints,
    section: sectionEndPoints,
    product: productEndPoints,
    filter: filterEndPoints,
}

export default allEndPoints