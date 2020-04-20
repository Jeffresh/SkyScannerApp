import axios from 'axios'

const baseURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices"

export default (method: any, url: any, data: any, headers: any) =>
  axios({
    method,
    url,
    data,
    headers,
  })
