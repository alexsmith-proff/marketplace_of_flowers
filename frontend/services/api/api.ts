import authEndPoints from "./endpoints/auth.endpoints";
import menuEndPoints from "./endpoints/menu.endpoints";
import sectionEndPoints from "./endpoints/section.endpoints";

const allEndPoints = {
    auth: authEndPoints,
    menu: menuEndPoints,
    section: sectionEndPoints
}

export default allEndPoints