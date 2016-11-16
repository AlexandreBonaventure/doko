/* eslint-disable key-spacing*/
import axios from 'axios'
const PLUS_HOST = process.env.PLUS_HOST

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
  await axios.post(`${PLUS_HOST}/api/v1/exercices/reponses`, postData).then(({ data }) => data)
}
