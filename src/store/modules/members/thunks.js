import kenzieHub from '../../../services/axios'

// buscar todos os usuários
// recebe um obj com page e perPage

export const getUsers = async(options) => {
    const { page, perPage } = options
    const response = await kenzieHub.get(`/users?perPage=${perPage}&page=${page}`)
        // console.log(response.data)
        // TODO: ADD dispatch
}