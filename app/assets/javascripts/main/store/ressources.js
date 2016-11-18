/* eslint-disable key-spacing*/
import axios from 'axios'
import { shuffle, indexBy, chain } from 'lodash'

import { set } from 'vue'
import Question from 'models/question'
import Usager from 'models/usager'
import Diffusion from 'models/diffusion'

const PLUS_HOST = process.env.PLUS_HOST
const API_HOST = process.env.API_HOST

const ressources = {
  questions: [],
  randomQuestions: [],
  usager: null,
  diffusions: {},
}
export default ressources

// COMPUTED


// ACTIONS
// QUESTIONS
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

// USAGER
export async function createUsager() {
  if (!ressources.usager) {
    ressources.usager = await Usager.create()
  }
  return ressources.usager
}
export async function updateUsager(data) {
  return ressources.usager = await Usager.update(ressources.usager.id, data)
}

// USAGER
export async function loadAllDiffusions() {
  if (!ressources.diffusions.length) {
    ressources.diffusions = await Diffusion.findAll()
      .then(data => chain(data).map((d, i) => ({ ...d, position: i + 1 })).indexBy('id').value())
  }
  return ressources.diffusions
}
// USAGER
export async function loadDiffusion(id) {
  if (!Diffusion.get(id)) {
    set(ressources.diffusions, id, await Diffusion.find(id))
  }
  return Diffusion.get(id)
}
