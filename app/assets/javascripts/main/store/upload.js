/* eslint-disable key-spacing*/
import axios from 'axios'
const API_HOST = process.env.API_HOST

// const ressources = {
//   questions: [],
// }
// export default ressources

// COMPUTED


// ACTIONS
export async function giveAnswer(blob, question_id, user_id) {
  const postData = new FormData()
  postData.append('reponse[fichier]', blob)
  postData.append('reponse[user_uid]', user_id)
  postData.append('reponse[question_id]', question_id)
  await axios.post(`${API_HOST}/api/v1/exercices/reponses`, postData).then(({ data }) => data)
}
