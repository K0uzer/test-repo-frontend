import axios from 'axios'
import PATHS from '../constants/path'
import { User } from '../types'

const { MOCK_URL, MOCK_USERS } = PATHS

const apiClient = axios.create({
    baseURL: MOCK_URL,
})

export const fetchUsers = async (start = 0, limit = 4) => {
    try {
        const { data } = await apiClient.get<User[]>(
            `${MOCK_USERS}?_start=${start}&_limit=${limit}`,
        )
        return data
    } catch (error) {
        throw new Error(`Не удалось загрузить пользователей ${error}`)
    }
}
