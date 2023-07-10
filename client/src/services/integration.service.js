import axios from 'axios'
import { envConfig } from '@/configs'

const apiUrl = "https://server-blackedips.bunnyenv.com"

const getVisits = () => {
  let payload = {};
  return axios.get(`${apiUrl}/v1/cs/visits`)
}

const getChartData = () => {
  let payload = {};
  return axios.get(`${apiUrl}/v1/cs/charts`)
}

const testChainLinkData = (ip, fingerprint) => {
  let payload = {};
  return axios.post(`${apiUrl}/v1/cs/chainlink`, {ip, fingerprint})
}

export const integrationService = {
  getChartData,
  getVisits,
  testChainLinkData
}