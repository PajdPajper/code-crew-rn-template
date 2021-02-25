import Axios from '../utils/Axios'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../constants/api-routes'
import { Toast } from 'native-base'
import Colors from '../constants/Colors'

// ###### GET SERVICES #######
/**
 * Fetch Chronic Conditions
 * @returns {Promise<any>}
 */
const fetchChronicConditions = async (language) => {
  try {
    const res = await Axios.get(api.chronicConditions)
    return res.data
    // const rezultat = res.data.map((e) => {
    //   console.log('e sa pocetka map', e.language === 'en');
    //   if (language === e.language) {
    //     console.log('e iz mape za chron', e);
    //     return e
    //   }
    // })
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

/**
 * Fetch Physical aliments
 * @returns {Promise<any>}
 */
const fetchPhysicalAilments = async (language) => {
  try {
    const res = await Axios.get(api.physicalAilments)

    return res.data
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

/**
 * Fetch Exercise Goals
 * @returns {Promise<any>}
 */
const fetchExerciseGoals = async (language) => {
  try {
    const res = await Axios.get(api.exerciseGoals)
    return res.data
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

/**
 * Fetch Persona
 * @returns {Promise<any>}
 */
const fetchPersona = async (language) => {
  try {
    const res = await Axios.get(api.persona)
    return res.data
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

/**
 * Fetch calendar
 * @returns {Promise<any>}
 */
const fetchCalendar = async () => {
  try {
    const res = await Axios.get(api.calendar)

    return res.data
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

/**
 * Fetch videos
 * @returns {Promise<any>}
 */
const fetchVideos = async () => {
  try {
    const res = await Axios.get(api.videos)

    return res.data
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

const fetchVideoDetails = async (id) => {
  try {
    const res = await Axios.get(`${api.videos}${id}/`)
    console.log('ovo', res)
    return res.data
  } catch (e) {
    console.log(e)
    console.log(e.response)
    handleError(e.response)
  }
}

/**
 * Fetch messages
 * @returns {Promise<any>}
 */
const fetchMessages = async () => {
  try {
    const res = await Axios.get(api.messages)

    return res.data
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

/**
 * Fetch message details
 * @returns {Promise<any>}
 */
const fetchMessageDetails = async (id) => {
  console.log('id', id)
  console.log('id', `${api.message}/${id}`)
  try {
    const res = await Axios.get(`${api.message}${id}/`)

    return res.data
  } catch (e) {
    console.log(e)
    handleError(e.response)
  }
}

// ###### POST SERVICES ######

/**
 * Sign up
 * @param email
 * @param date
 * @param mobileNumber
 * @param healthIdNumber
 * @param gender
 * @param chronicCondition
 * @param password1
 * @param password2
 * @param firstName
 * @param lastName
 * @param language
 * @param physicalAliments
 * @param exerciseGoals
 * @param persona
 * @returns {Promise<*>}
 */
const signUp = async (
  firstName,
  lastName,
  email,
  date,
  mobileNumber,
  language,
  healthIdNumber,
  gender,
  chronicCondition,
  physicalAliments,
  exerciseGoals,
  persona,
  password1,
  password2
) => {
  console.log('email iz signup', email)
  try {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      // dob: date,
      dob: '1986-11-11',
      phone_number: mobileNumber,
      language,
      code: healthIdNumber,
      gender,
      chronic_conditions: chronicCondition,
      physical_ailments: physicalAliments,
      exercise_goals: exerciseGoals,
      persona,
      password1,
      password2,
    }

    const res = await Axios.post(api.signUp, formData)
    console.log('signmup res', res)
    handleSuccess(res)
    return res
  } catch (e) {
    console.log(e)
    console.log(e.response)
    handleError(e.response)
  }
}

/**
 * Sign In
 * @param email
 * @param password
 * @returns {Promise<AxiosResponse<any>>}
 */
const signIn = async (email, password) => {
  try {
    const formData = {
      email,
      password
    }

    const res = await Axios.post(api.login, formData)
    console.log('res iz logina', res)
    return res
  } catch (e) {
    console.log(e);
    console.log(e.response);
    handleError(e)
  }
}

const forgotPassword = async (email) => {
  try {
    const formData = {
      email
    }

    const res = await Axios.post(api.forgotPassword, formData)
    console.log('res iz logina', res)
    handleSuccess(res)
    return res
  } catch (e) {
    console.log(e);
    console.log(e.response);
    handleError(e)
  }
}

/**
 * // Parse success and show it in a Toast
 * @param res
 */
function handleSuccess(res) {
  const { detail } = res.data
  Toast.show({
    text: detail || 'Success!',
    duration: 3000,
    style: {
      backgroundColor: Colors.SUCCESS
    }
  })
}

/**
 * // Parse error and show it in a Toast
 * @param e
 */
function handleError(e) {
  const error = e.response.data
  console.log('error', error);
  Toast.show({
    text: JSON.stringify(error) || 'Something went wrong',
    duration: 3000,
    style: {
      backgroundColor: Colors.DANGER
    }
  })
}

export {
  signIn,
  signUp,
  forgotPassword,
  fetchChronicConditions,
  fetchPhysicalAilments,
  fetchExerciseGoals,
  fetchPersona,
  fetchCalendar,
  fetchVideos,
  fetchVideoDetails,
  fetchMessages,
  fetchMessageDetails,
}
