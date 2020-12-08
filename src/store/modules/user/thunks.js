import kenzieHub from '../../../services/axios'

export const userLoginThunk = async(userLoginInfo, error) => async(dispatch, _getState) => {

    const { email, password } = userLoginInfo
    try {

        const response = await kenzieHub.post(`/sessions`, {
            "email": email,
            "password": password
        })

        const { token } = response.data

        if (response.data.token) {
            localStorage.setItem("authToken", token)
        }
    } catch (err) {
        console.log(err)
    }

    // dispatch(action())
}


export const createNewTechThunk = async(tech) => async(dispatch, _getState) => {
    const { title, status } = tech
    try {
        const response = await kenzieHub.post(`/users/techs`, {
            "title": title,
            "status": status
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("authToken")
            }
        })
    } catch (err) {
        console.log(err)
    }
    // dispatch(action())
}

export const updateTechThunk = async(newTech) => async(dispatch, _getUser) => {
    const { techId, newStatus } = newTech
    try {
        const response = await kenzieHub.put(`/users/techs/${techId}`, {
            "status": newStatus
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("authToken")
            }
        })
    } catch (err) {
        console.log(err)
    }
    // dispatch(action())
}