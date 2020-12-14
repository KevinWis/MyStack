import kenzieHub from '../../services/axios'

export const deleteTech = async(techID) => {
    const  token = localStorage.getItem('authToken')
    try {
        const response = await kenzieHub.delete(`/users/techs/${techID}`,{
            headers:{Authorization: `Bearer ${token}`
        }
    })
    } catch (error) {
        console.log(error)
    }
}