import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2dd0c9b220b1460b917f2d8ae9889575',
    },

})