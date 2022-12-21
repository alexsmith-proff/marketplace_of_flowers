import authEndPoints from "./endpoints/auth.endpoints";
import menuEndPoints from "./endpoints/menu.endpoints";

const allEndPoints = {
    auth: authEndPoints,
    menu: menuEndPoints
}

export default allEndPoints