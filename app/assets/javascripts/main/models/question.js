import store from 'data-store'

export const Question = store.defineResource({
  name: 'question',
  basePath: '/api/v1',
  endpoint: 'exercices/questions',
})

store.registerModel('Question', Question)

export default Question
