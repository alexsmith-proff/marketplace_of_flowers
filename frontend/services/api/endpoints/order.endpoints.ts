import axios from "axios";

const orderEndPoints = {
    setOrder: (data) => axios.post(`${process.env.API_URI}/api/order/create`, data),
}

export default orderEndPoints