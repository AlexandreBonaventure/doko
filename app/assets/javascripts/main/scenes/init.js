
import Router from 'hype/router'
import Scene from 'hype/scene'

import ga from 'setup/ga.js'

import micSupport from 'services/mic-support'

import { readyDeffered } from 'services/ready.js'

import store from 'store'
import { loadQuestions } from 'store/ressources'

// Scenes
const AccueilScene = Scene.new('accueil', {
  component: require('vue/scenes/accueil-scene.vue'),
  store,
})
const QuestionScene = Scene.new('question', {
  component: require('vue/scenes/question-scene.vue'),
  store,
})
const UnsupportedScene = Scene.new('unsupported', {
  // component: require('vue/scenes/question-scene.vue'),
  // store,
})

ModuleLoader.module('RadioPage')
  .register('AccueilScene', AccueilScene)
  .register('QuestionScene', QuestionScene)

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

  Router.configure({
    async: true,
    notfound: 'intro',
    before: [(...args) => {
      const next = args.pop()
      const state = Router.getCurrentState()
      const path = Router.getPath()
      const queryParams = Router.getQueryParams()
      const params = Router.getRouteParams()
      store.router = { state, path, queryParams, params }
      next()
    }, checkSupportForMic],
  })

  const routes = {
    '/': {
      state: 'intro',
      on: [Router.showScene(AccueilScene)],
    },
    '/question': {
      state: 'questions-index',
      before: [function (next) {
        next(false)
        loadQuestions()
          .then(() => Router.setState('question', { id: 1 }))
          // .catch(() => )
      }],
      on: [Router.showScene(QuestionScene)],
    },
    '/question/:id': {
      state: 'question',
      before: [function(id, next) {
        if (!store.ressources.questions.length) Router.setState('questions-index')
        next()
      }],
      on: [Router.showScene(QuestionScene)],
    },
    '/unsupported': {
      state: 'unsupported',
      on: [Router.showScene(UnsupportedScene)],
    },
  }

  //checkSupportForMic
  // Object.values(routes).forEach(route => {
  //   route.before = [...(route.before || []), checkSupportForMic]
  // })

  Router.mount(routes, '/')
      // Router.init()

  Router.init('/')
  readyDeffered.resolve()
}

if (window.hypeDocument) {
  Init(window.hypeDocument)
} else {
  window.HYPE_eventListeners = window.HYPE_eventListeners || []
  window.HYPE_eventListeners.push({ type: 'HypeDocumentLoad', callback: Init })
}
