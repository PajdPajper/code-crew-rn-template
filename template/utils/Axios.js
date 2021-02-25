import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

const Axios = axios.create({
  baseURL: 'https://#'
})

Axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    if (token) {
      // config.headers.Authorization = 'Token 57e1900b32151439f5c35ac314cb8851';
      config.headers['Authorization'] = 'Token ' + token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const POST = (route, formData) => {
  console.log('route', route);
  try {
    return Axios.post(route, formData)
  } catch (err) {
    console.log(err)
  }
}

// Axios intercept request
export default Axios
