/* eslint-disable key-spacing*/
export default {
  displayTableKind: 'forfaits',
  selectedForfait: null,
  selectedCredit: null,
  forfaits: ['ecole', 'enseignant', 'parent', 'eleve'],
  credits:  ['ecole', 'enseignant', 'boite'],
  features: {
    ecole:      ['x', 'x', 'x', 'x', 'x'],
    enseignant: ['x', 'x', 'x', 'x', 'x'],
    parent:     ['x', 'x', 'x', 'x', 'x'],
    eleve:      ['x', 'x', 'x', 'o', 'o'],
  },
  featuresCredits: {
    creditEleves:     ['x', 'x', 'x', 'o'],
    creditEnseignant: ['x', 'x', 'x', 'x'],
    boite:            ['/', '/', '/', '/', '/', '/'],
  },
  signupForm: {
    enseignantCount: 0,
    elevesCount: 0,
  },
  paymentForm: {
    selectedMethod: null,
  },
  step: 1,
  completed: false,
}

// COMPUTED
export function totalPrice() {
  const form = this.signup.signupForm
  const total = form.enseignantCount * 11.99 + form.elevesCount * 1.99
  const reduction = total * 0.15
  return Math.round((total - reduction) * 100) / 100
}

// ACTIONS
export function nextStep() {
  if (this.signup.step < 3) this.signup.step++
  else this.signup.completed = true
}
