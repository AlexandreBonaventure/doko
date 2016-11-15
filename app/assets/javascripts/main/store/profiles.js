/* eslint-disable key-spacing*/
export default {
  profiles: [],
  new: {
    tagName: null,
    tagNumber: null,
    step: 0,
  },
}

// COMPUTED
export function newProfile() {
  return this.profiles.new
}
export function newProfileTag() {
  return `${this.profiles.new.tagName}${this.profiles.new.tagNumber}`
}


// ACTIONS
export function setRandomTagNumber() {
  const number = Math.round(Math.random() * 99)
  return this.profiles.new.tagNumber = number.length < 2 ? number + '0' : number
}
export function setTagName(mot) {
  return this.profiles.new.tagName = mot
}
export function nextStep() {
  return this.profiles.new.step = ++this.profiles.new.step
}
