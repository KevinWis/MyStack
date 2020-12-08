import kenzieHub from '../../../services/axios'

// buscar todos os usuários
// recebe um obj com page e perPage

export const getUsers = async(options) => {
    const { page, perPage } = options
    const response = await kenzieHub.get(`/users?perPage=${perPage}&page=${page}`)
        // console.log(response.data)
        // TODO: ADD dispatch
}

export const getUserById = async(userId) => {
    const response = await kenzieHub.get(`/users/${userId}`)
        // console.log(response.data)
        // TODO: ADD dispatch
}

// recebe obj {email, password}

export const userLogin = async(userLoginInfo) => {
    const { email, password } = userLoginInfo
    const response = await kenzieHub.post(`/sessions`, {
        "email": email,
        "password": password
    })

    const { token } = response.data

    if (response.data.token) {
        localStorage.setItem("authTokes", token)
    }
}

export const registerUser = async(resisterUserInfo) => {

    const { email, password, name, bio, contact, course_module } = resisterUserInfo

    const response = await kenzieHub.post(`/users`, {
        "email": email,
        "password": password,
        "name": name,
        "bio": bio,
        "contact": contact,
        "course_module": course_module
    })
    console.log(response.data)
}

// getUsers(options)
// getUserById(searchUserId)
// userLogin(loginForm)

// registerUser(register)