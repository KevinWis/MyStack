import kenzieHub from "../../services/axios"
import axios from 'axios'

//export const getMyProfile =  () => async dispatch => {
//    
//    const token = localStorage.getItem("authToken")
//    try {
//        const reponse = await kenzieHub.get('/profile',
//        dispatch({
//            type: MY_PROFILE_INFO,
//            payload: Response.data
//        }),{
//            headers:{
//                Authorization: `Bearer ${token}`
//            }
//        })
//        console.log(reponse.data)
//    } catch {
//
//    }
//}

export const getMyProfile =  async () =>  {
    
    const token = localStorage.getItem("authToken")
    try {
        const response = await axios.get('https://kenziehub.me/profile',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (err){
        console.log(err)
    }
}