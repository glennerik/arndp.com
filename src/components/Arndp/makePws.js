const all_letters_LC = "abcdefghijklmnopqrstuvwxyz"
const all_letters_UC = all_letters_LC.toUpperCase()
const all_numbers = "0123456789"
const symbols = "!\"#$%&'()*+,-./:;<>=?@[]\\^_{}|~×`"
// const non_az_letters = "üéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑÓßÔÒõÕµþÞÚÛÙýÝ"
const non_az_letters_UC = "ÄÅÉÆÖÜ£ØƒÑÓßÔÒÕÚÛÙÝ"
const non_az_letters_LC = "üéâäàåçêëèïîìæôöòûùÿøáíóúñõµþÞý"

const generate_password = criteria => {
  const seed = []
  seed.push(criteria.lc ? all_letters_LC : null)
  seed.push(criteria.uc ? all_letters_UC : null)
  seed.push(criteria.numbers ? all_numbers : null)
  seed.push(criteria.space ? "          " : null)
  seed.push(criteria.symbols ? symbols : null)
  if (criteria.non_az) {
    if (!criteria.lc && !criteria.uc) {
      seed.push(non_az_letters_LC)
      seed.push(non_az_letters_UC)
    } else {
      if (criteria.lc) {
        seed.push(non_az_letters_LC)
      }
      if (criteria.uc) {
        seed.push(non_az_letters_UC)
      }
    }
  }
  const useChars = seed.join("")
  const pw = []
  const { length } = criteria
  Array.from({ length }).forEach(() => {
    const charPos = Math.floor(Math.random() * useChars.length)
    pw.push(useChars[charPos])
  })
  return pw.join("")
}

export const makePws = criteria => {
  const pws = []
  Array.from({ length: criteria.numberOfPws }).forEach(() =>
    pws.push(generate_password(criteria))
  )
  return pws
}
