import kenzieHub from '../../services/axios'

export const updateTech = async(techID,newStatus) => {

    const  token = localStorage.getItem('authToken')
    
    try {
        const response = await kenzieHub.put(`/users/techs/${techID}`,{
            "status":newStatus
        },{
            headers:{
                Authorization: `Bearer ${token}`
        }
    })
    } catch (error) {
        console.log(error)
    }
}