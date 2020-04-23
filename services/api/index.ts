import axios from 'axios'

const baseURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices"

export default (url: any, method: any, data: any, headers: any) =>
  axios({
    baseURL,
    method,
    url,
    data,
    headers: {
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "3518510757mshe313e58f66972d1p110a73jsn978ba4ec9ce8",
      ...headers
    }
  })


