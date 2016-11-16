/* eslint-disable key-spacing*/
import axios from 'axios'
import { shuffle } from 'lodash'
const PLUS_HOST = process.env.PLUS_HOST
const API_HOST = process.env.API_HOST
import Question from 'models/question'
import Usager from 'models/usager'

const ressources = {
  questions: [],
  randomQuestions: [],
  usager: null,
}
export default ressources

// COMPUTED


// ACTIONS

export async function loadQuestions() {
  ressources.questions = !ressources.questions.length ?
    await axios.get(`${PLUS_HOST}/api/v1/exercices/questions.json?t=radio`)
      .then(({ data }) => data)
      .then((questions) => {
        Question.inject(questions)
        return questions
      })
    : ressources.questions
  ressources.randomQuestions = shuffle(ressources.questions)
  return ressources.questions
}

export async function createUsager() {
  if (!ressources.usager) {
    ressources.usager = await Usager.create()
  }
  return ressources.usager
}
export async function updateUsager(data) {
  return ressources.usager = await Usager.update(ressources.usager.id, data)
}
