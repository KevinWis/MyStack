import kenzieHub from '../../../services/axios'

export const getUserListThunk = async(options) => async(dispatch, _getState) => {

    const { page, perPage } = options
    try {
        const response = await kenzieHub.get(`/users?perPage=${perPage}&page=${page}`)

        // dispatch(action())
    } catch (err) {
        console.log(err)
    }

}

export const getUserByIdThunk = async(userId) => async(dispatch, _getState) => {

    try {
        const response = await kenzieHub.get(`/users/${userId}`)

        // dispatch(action())
    } catch (err) {
        console.log(err)
    }

}

export const registerUserThunk = async(resisterUserInfo) => async(dispatch, _getState) => {

    const { email, password, name, bio, contact, course_module } = resisterUserInfo
    try {

        const response = await kenzieHub.post(`/users`, {
            "email": email,
            "password": password,
            "name": name,
            "bio": bio,
            "contact": contact,
            "course_module": course_module
        })

        // dispatch(action())?
    } catch (err) {
        console.log(err)
    }

}