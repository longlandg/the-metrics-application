function makeEpochTimeObject() {
  const epochTime = new Date().getTime() / 1000
  
  return {'epoch' : epochTime }

}

module.exports = makeEpochTimeObject