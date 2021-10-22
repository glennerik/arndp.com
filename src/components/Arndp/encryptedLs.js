import SecureLs from "secure-ls"

let encryptedLs
const lsName = "arndp.com:pws"

export const getSavedPasswords = () => {
  try {
    const ls = openLs()
    return ls.get(lsName) || []
  } catch (e) {
    alert("failed opening encrypted localstorage", e)
  }
}

export const savePassword = ({ name, password }) => {
  try {
    const ls = openLs()
    const lsPws = ls.get(lsName) || []
    lsPws.push({ name, password, time: new Date() })
    ls.set(lsName, lsPws)
  } catch (e) {
    alert("failed saving encrypted localstorage", e)
  }
}

const openLs = () => {
  if (!encryptedLs) {
    const encryptionSecret = prompt(
      global.localStorage.getItem(lsName) === null
        ? "Make a secret phrase that will be used to encrypt your passwords. If you forget this, you will loose access to your passwords!"
        : "Open your encrypted passwords database, to include this new password (provide your master password to decrypt)."
    )
    try {
      encryptedLs = new SecureLs({ encodingType: "aes", encryptionSecret })
      global.localStorage.getItem(lsName) !== null && encryptedLs.get(lsName) // if this fails the password was probably wrong, so we catch
    } catch (e) {
      encryptedLs = null
      global.confirm(`Wrong password, TRY AGAIN?`) && openLs()
    }
  }
  return encryptedLs
}
