import kenzieHub from '../../services/axios'

export const updateUserInfo = async (newUserInfo) => {

    const {name, contact,currentPassword, newPassword} = newUserInfo
    const token = localStorage.getItem("authToken")
    
    const reponse = await kenzieHub.put('/profile',{
        "name": name ? name : "",
        "contact": contact ? contact : "",
        "old_password":currentPassword ? currentPassword : "",
        "password":newPassword ? newPassword : "" 
    },{
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        }
    })
}
