
import accueilScene from 'vue/scenes/accueil-scene.vue'

export default [
  {
    name: 'home',
    path: '/',
    component: accueilScene,
  },
  // {
  //   name: 'node-edit',
  //   path: '/nodes/:id',
  //   component: accueilScene,
  // },
  // // graphs
  // {
  //   name: 'graphs-index',
  //   path: '/graphs',
  //   component: graphsIndexScene,
  // },
  // {
  //   name: 'graphs-show',
  //   path: '/graphs/:id',
  //   component: graphsShowScene,
  //   children: [
  //     {
  //       name: 'nodes-edit',
  //       path: 'edit/nodes/:node_id',
  //       component: nodeEditComponent,
  //     },
  //   ],
  // },
]

  // const routes = {
  //   '/': {
  //     state: 'intro',
  //     on: [Router.showScene(AccueilScene)],
  //   },
  //   '/questions': {
  //     state: 'questions-index',
  //     before: [function (next) {
  //       loadQuestions()
  //         .then(() => next())
  //     }],
  //     on: [Router.showScene(QuestionsIndexScene)],
  //   },
  //   '/questions/random/record': {
  //     state: 'questions-random-record',
  //     before: [function (next) {
  //       next(false)
  //       loadQuestions()
  //         .then((questions) => Router.setState('question-record', { id: store.ressources.randomQuestions[0].id }))
  //         // .catch(() => )
  //     }],
  //     on: [Router.showScene(QuestionScene)],
  //   },
  //   '/questions/:id/record': {
  //     state: 'question-record',
  //     before: [function(id, next) {
  //       if (!store.ressources.questions.length) Router.setState('questions-index')
  //       next()
  //     }],
  //     on: [Router.showScene(QuestionScene)],
  //   },
  //   '/signup': {
  //     state: 'signup',
  //     on: [Router.showScene(SignupScene)],
  //   },
  //   '/listen': {
  //     state: 'diffusions-index',
  //     on: [Router.showScene(DiffusionsIndexScene)],
  //   },
  //   '/listen/:id': {
  //     state: 'diffusions-show',
  //     on: [Router.showScene(DiffusionsShowScene)],
  //   },
  //   '/unsupported': {
  //     state: 'unsupported',
  //     on: [Router.showScene(UnsupportedScene)],
  //   },
  // }
  //
  //
