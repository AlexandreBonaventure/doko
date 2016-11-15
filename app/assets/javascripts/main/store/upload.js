/* eslint-disable key-spacing*/
import axios from 'axios'
const API_HOST = process.env.API_HOST

// const ressources = {
//   questions: [],
// }
// export default ressources

// COMPUTED


// ACTIONS
export async function uploadAudio(blob) {
  const postData = new FormData()
  postData.append('audio', blob)
  postData.append('video', {})
  await axios.post(`${API_HOST}/radio/messages/upload`, postData).then(({ data }) => data)
}
