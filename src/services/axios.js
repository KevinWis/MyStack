import axios from 'axios'

const kenzieHub = axios.create({
    baseURL: 'https://kenziehub.me'
})

export default kenzieHub