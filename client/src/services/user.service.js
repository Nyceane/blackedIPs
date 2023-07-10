import axios from 'axios'
import { envConfig } from '@/configs'



const apiUrl = "https://server-blackedips.bunnyenv.com"

const getUsers = (page) => {
	return axios.get(`${apiUrl}/v1/users?limit=${envConfig.users.resultsPerPage}&page=${page}`, {})
		.then(response => {
	    return response.data
	  })
}

const createUser = (username, email, password, role) => {
	return axios.post(`${apiUrl}/v1/users`, {
    name: username,
    email: email,
    password: password,
    role: role
  })
}

const updateUserPassword = (userId, password) => {
	return axios.patch(`${apiUrl}/v1/users/${userId}`, {
    password: password
  })
}

const updateUserDetails = (userId, username, email) => {
	return axios.patch(`${apiUrl}/v1/users/${userId}`, {
    name: username,
    email: email
  })
}

const updateUserWallet = (userId, walletPublicKey, walletPrivateKey) => {
  return axios.patch(`${apiUrl}/v1/users/${userId}`, {
    walletPublicKey: walletPublicKey,
    walletPrivateKey: walletPrivateKey
  })
}

const deleteUser = (userId) => {
	return axios.delete(`${apiUrl}/v1/users/${userId}`, {})
}

export const userService = {
  getUsers,
  createUser,
  updateUserPassword,
  updateUserDetails,
  updateUserWallet,
  deleteUser,
}