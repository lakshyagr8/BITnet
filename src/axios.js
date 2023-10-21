import axios from 'axios'
const instance = axios.create({
    baseURl: 'http://localhost:9000'
})
export default instance