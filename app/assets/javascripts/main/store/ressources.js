/* eslint-disable key-spacing*/
import axios from 'axios'
import { shuffle } from 'lodash'
const API_HOST = process.env.API_HOST

const ressources = {
  questions: [],
  randomQuestions: [],
}
export default ressources

// COMPUTED


// ACTIONS

export async function loadQuestions() {
  ressources.questions = !ressources.questions.length ?
    await axios.get(`${API_HOST}/api/v1/exercices/questions.json?t=radio`).then(({ data }) => data)
    : ressources.questions
  ressources.randomQuestions = shuffle(ressources.questions)
  return ressources.questions
}
