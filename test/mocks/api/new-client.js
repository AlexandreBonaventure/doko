
module.exports = function(data) {
  const resp = Object.assign(
    { id: 0 },
    data.body
  )
  return {
    json: resp,
  }
}
