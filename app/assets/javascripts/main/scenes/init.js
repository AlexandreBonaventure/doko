
import Router from 'hype/router'
import Scene from 'hype/scene'

import ga from 'setup/ga.js'

import micSupport from 'services/mic-support'

import { readyDeffered } from 'services/ready.js'

import store from 'store'
import { loadQuestions, createUsager } from 'store/ressources'

// Scenes
const AccueilScene = Scene.new('accueil', {
  component: require('vue/scenes/accueil-scene.vue'),
  store,
})
const QuestionScene = Scene.new('question', {
  component: require('vue/scenes/question-scene.vue'),
  store,
})
const QuestionsIndexScene = Scene.new('questions-index', {
  component: require('vue/scenes/questions-index-scene.vue'),
  store,
})
const UnsupportedScene = Scene.new('unsupported', {
  // component: require('vue/scenes/question-scene.vue'),
  // store,
})
const SignupScene = Scene.new('signup', {
  component: require('vue/scenes/signup-scene.vue'),
  store,
})
const DiffusionsIndexScene = Scene.new('diffusions-index', {
  component: require('vue/scenes/diffusions-index-scene.vue'),
  store,
})
const DiffusionsShowScene = Scene.new('diffusions-show', {
  component: require('vue/scenes/diffusions-show-scene.vue'),
  store,
})

ModuleLoader.module('RadioPage')
  .register('AccueilScene', AccueilScene)
  .register('QuestionScene', QuestionScene)
  .register('QuestionsIndexScene', QuestionsIndexScene)
  .register('SignupScene', SignupScene)
  .register('DiffusionsIndexScene', DiffusionsIndexScene)
  .register('DiffusionsShowScene', DiffusionsShowScene)

function Init(hypeDocument) {
  window.HYPE_eventListeners = []

  if (process.env.NODE_ENV === 'production') ga() // insert google tag manager

  Router.hype(hypeDocument)

  const checkSupportForMic = (...args) => {
    const next = args.pop()
    if (!micSupport) {
      next(false)
      Router.setState('unsupported')
    } else {
      next()
    }
  }
  const checkCreateUsager = (...args) => {
    const next = args.pop()
    createUsager()
      .then(() => next())
      .catch(() => next(false))
  }

  Router.configure({
    async: true,
    notfound: 'intro',
    before: [
      (...args) => {
        const next = args.pop()
        const state = Router.getCurrentState()
        const path = Router.getPath()
        const queryParams = Router.getQueryParams()
        const params = Router.getRouteParams()
        store.router = { state, path, queryParams, params }
        next()
      },
      checkSupportForMic,
      checkCreateUsager,
    ],
  })

  const routes = {
    '/': {
      state: 'intro',
      on: [Router.showScene(AccueilScene)],
    },
    '/questions': {
      state: 'questions-index',
      before: [function (next) {
        loadQuestions()
          .then(() => next())
      }],
      on: [Router.showScene(QuestionsIndexScene)],
    },
    '/questions/random/record': {
      state: 'questions-random-record',
      before: [function (next) {
        next(false)
        loadQuestions()
          .then((questions) => Router.setState('question-record', { id: store.ressources.randomQuestions[0].id }))
          // .catch(() => )
      }],
      on: [Router.showScene(QuestionScene)],
    },
    '/questions/:id/record': {
      state: 'question-record',
      before: [function(id, next) {
        if (!store.ressources.questions.length) Router.setState('questions-index')
        next()
      }],
      on: [Router.showScene(QuestionScene)],
    },
    '/signup': {
      state: 'signup',
      on: [Router.showScene(SignupScene)],
    },
    '/listen': {
      state: 'diffusions-index',
      on: [Router.showScene(DiffusionsIndexScene)],
    },
    '/listen/:id': {
      state: 'diffusions-show',
      on: [Router.showScene(DiffusionsShowScene)],
    },
    '/unsupported': {
      state: 'unsupported',
      on: [Router.showScene(UnsupportedScene)],
    },
  }


  Router.mount(routes, '/')

  Router.init('/')
  readyDeffered.resolve()
}

if (window.hypeDocument) {
  Init(window.hypeDocument)
} else {
  window.HYPE_eventListeners = window.HYPE_eventListeners || []
  window.HYPE_eventListeners.push({ type: 'HypeDocumentLoad', callback: Init })
}
